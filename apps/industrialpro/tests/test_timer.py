import pytest
from dohler.timer import TimerService

@pytest.fixture
def timer_service():
    return TimerService()

def test_timer_service_initialization(timer_service):
    assert timer_service is not None

def test_timer_service_start_timer(timer_service):
    # Test starting a timer
    timer = timer_service.start_timer(60)
    assert timer is not None
    assert timer.duration == 60

    # Test starting a timer with invalid duration
    with pytest.raises(ValueError):
        timer_service.start_timer(0)

    # Test starting a timer with invalid duration
    with pytest.raises(ValueError):
        timer_service.start_timer(-1)

def test_timer_service_pause_timer(timer_service):
    # Start a test timer
    timer = timer_service.start_timer(60)

    # Test pausing a timer
    paused_timer = timer_service.pause_timer(timer.id)
    assert paused_timer is not None
    assert paused_timer.paused

    # Test pausing a timer that doesn't exist
    with pytest.raises(ValueError):
        timer_service.pause_timer(999)

def test_timer_service_resume_timer(timer_service):
    # Start and pause a test timer
    timer = timer_service.start_timer(60)
    timer_service.pause_timer(timer.id)

    # Test resuming a timer
    resumed_timer = timer_service.resume_timer(timer.id)
    assert resumed_timer is not None
    assert not resumed_timer.paused

    # Test resuming a timer that doesn't exist
    with pytest.raises(ValueError):
        timer_service.resume_timer(999)

def test_timer_service_reset_timer(timer_service):
    # Start a test timer
    timer = timer_service.start_timer(60)

    # Test resetting a timer
    reset_timer = timer_service.reset_timer(timer.id)
    assert reset_timer is not None
    assert reset_timer.duration == 60
    assert not reset_timer.paused

    # Test resetting a timer that doesn't exist
    with pytest.raises(ValueError):
        timer_service.reset_timer(999)

def test_timer_service_get_timer(timer_service):
    # Start a test timer
    timer = timer_service.start_timer(60)

    # Test getting a timer
    retrieved_timer = timer_service.get_timer(timer.id)
    assert retrieved_timer is not None
    assert retrieved_timer.duration == 60

    # Test getting a timer that doesn't exist
    assert timer_service.get_timer(999) is None

def test_timer_service_get_all_timers(timer_service):
    # Start test timers
    timer_service.start_timer(60)
    timer_service.start_timer(120)

    # Test getting all timers
    timers = timer_service.get_all_timers()
    assert len(timers) == 2

    # Test getting all timers when no timers exist
    timer_service.reset_timer(1)
    timer_service.reset_timer(2)
    timers = timer_service.get_all_timers()
    assert len(timers) == 0
