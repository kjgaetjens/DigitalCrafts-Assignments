from datetime import datetime

class PoolTable:
    def __init__(self, number, is_occupied):
        self.number = number
        self.is_occupied = is_occupied
        self.start_time = datetime(1111,1,1,12)
        self.end_time = datetime(1111,1,1,12)
        self.total_time = 0 #end_time - start_time

    # #move these somewhere else
    # @staticmethod
    # def time_spent(start_time, end_time):
    #     pass

    # @staticmethod
    # def check_if_occupied
