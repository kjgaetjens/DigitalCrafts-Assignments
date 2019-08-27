from datetime import datetime

class PoolTable:
    def __init__(self, number, is_occupied, start_time = datetime(1111,1,1,0,0,0,0), end_time = datetime(1111,1,1,0,0,0,0), total_time = 0):
        self.number = number
        self.is_occupied = is_occupied
        self.start_time = start_time
        self.end_time = end_time
        self.total_time = total_time

    def to_dictionary(self):
        return {
            "number": self.number, 
            "start_time": datetime.strftime(self.start_time, "%m/%d/%Y %H:%M"),
            "end_time": datetime.strftime(self.end_time, "%m/%d/%Y %H:%M"),
            "total_minutes_played": self.total_time,
            "cost_dollar": self.total_time/60 * 30
            }        

    def to_dictionary_quit(self):
        return {
            "number": self.number,
            "is_occupied": self.is_occupied,
            "start_time": datetime.strftime(self.start_time, "%m/%d/%Y %H:%M:%S:%f"),
            "end_time": datetime.strftime(self.end_time, "%m/%d/%Y %H:%M:%S:%f"),
            "total_minutes_played": self.total_time,
            }

def from_dictionary_quit(dict):
    return PoolTable(dict["number"], dict["is_occupied"], datetime.strptime(dict["start_time"], "%m/%d/%Y %H:%M:%S:%f"), datetime.strptime(dict["end_time"], "%m/%d/%Y %H:%M:%S:%f"), dict["total_minutes_played"])

