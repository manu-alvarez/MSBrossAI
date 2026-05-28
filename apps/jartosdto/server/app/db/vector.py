import os
import uuid
from typing import List, Dict
from langchain_community.document_loaders import PyPDFLoader
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter

VECTOR_STORE_PATH = os.path.join(os.path.dirname(__file__), "..", "..", "faiss_index")
os.makedirs(VECTOR_STORE_PATH, exist_ok=True)

class VectorDBService:
    def __init__(self):
        # Usamos BGE-small-en-v1.5 o all-MiniLM-L6-v2, modelos locales rápidos y gratuitos
        self.embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
        self.text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=100)
        
        self.index_path = os.path.join(VECTOR_STORE_PATH, "index")
        
        if os.path.exists(self.index_path):
            self.vector_store = FAISS.load_local(self.index_path, self.embeddings, allow_dangerous_deserialization=True)
        else:
            self.vector_store = FAISS.from_texts(["JartosDTo Initialize Vector Store"], self.embeddings)
            self.vector_store.save_local(self.index_path)

    async def ingest_pdf(self, file_path: str) -> str:
        """Ingests a PDF file and adds its content to the vector database."""
        loader = PyPDFLoader(file_path)
        pages = loader.load()
        docs = self.text_splitter.split_documents(pages)
        
        # Guardar en FAISS
        self.vector_store.add_documents(docs)
        self.vector_store.save_local(self.index_path)
        
        return f"Ingestados {len(docs)} fragmentos del documento."

    async def retrieve_context(self, query: str, top_k: int = 3) -> str:
        """Retrieves top_k most similar chunks for a given query."""
        docs = self.vector_store.similarity_search(query, k=top_k)
        
        if not docs:
            return ""
            
        context = "\n\n---\n\n".join([doc.page_content for doc in docs])
        return context

vector_db = VectorDBService()
