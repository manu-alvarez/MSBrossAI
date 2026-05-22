"""
JartosDTo — SQLAlchemy Declarative Base.

All ORM models inherit from this base.
"""

from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    """Base class for all ORM models."""
    pass
