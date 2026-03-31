import pytest
from dohler.tasks import TaskManager

@pytest.fixture
def task_manager():
    return TaskManager()

def test_task_manager_initialization(task_manager):
    assert task_manager is not None

def test_task_manager_create_task(task_manager):
    # Test creating a task
    task = task_manager.create_task("Test Task", "Test Description")
    assert task is not None
    assert task.title == "Test Task"
    assert task.description == "Test Description"

    # Test creating a task with invalid title
    with pytest.raises(ValueError):
        task_manager.create_task("", "Test Description")

    # Test creating a task with invalid description
    with pytest.raises(ValueError):
        task_manager.create_task("Test Task", "")

def test_task_manager_update_task(task_manager):
    # Create a test task
    task = task_manager.create_task("Test Task", "Test Description")

    # Test updating a task
    updated_task = task_manager.update_task(task.id, "Updated Task", "Updated Description")
    assert updated_task is not None
    assert updated_task.title == "Updated Task"
    assert updated_task.description == "Updated Description"

    # Test updating a task with invalid title
    with pytest.raises(ValueError):
        task_manager.update_task(task.id, "", "Updated Description")

    # Test updating a task with invalid description
    with pytest.raises(ValueError):
        task_manager.update_task(task.id, "Updated Task", "")

    # Test updating a task that doesn't exist
    with pytest.raises(ValueError):
        task_manager.update_task(999, "Updated Task", "Updated Description")

def test_task_manager_delete_task(task_manager):
    # Create a test task
    task = task_manager.create_task("Test Task", "Test Description")

    # Test deleting a task
    task_manager.delete_task(task.id)
    assert task_manager.get_task(task.id) is None

    # Test deleting a task that doesn't exist
    with pytest.raises(ValueError):
        task_manager.delete_task(999)

def test_task_manager_get_task(task_manager):
    # Create a test task
    task = task_manager.create_task("Test Task", "Test Description")

    # Test getting a task
    retrieved_task = task_manager.get_task(task.id)
    assert retrieved_task is not None
    assert retrieved_task.title == "Test Task"
    assert retrieved_task.description == "Test Description"

    # Test getting a task that doesn't exist
    assert task_manager.get_task(999) is None

def test_task_manager_get_all_tasks(task_manager):
    # Create test tasks
    task_manager.create_task("Test Task 1", "Test Description 1")
    task_manager.create_task("Test Task 2", "Test Description 2")

    # Test getting all tasks
    tasks = task_manager.get_all_tasks()
    assert len(tasks) == 2

    # Test getting all tasks when no tasks exist
    task_manager.delete_task(1)
    task_manager.delete_task(2)
    tasks = task_manager.get_all_tasks()
    assert len(tasks) == 0
