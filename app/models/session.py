from .db import db

class Session(db.Model):
    __tablename__ = "sessions"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
    skill_id = db.Column(db.Integer, db.ForeignKey("skills.id"), nullable = False)
    

    skill = db.relationship("Skill", back_populates="sessions")
    user = db.relationship("User", back_populates="sessions")
    # One session will have many session_exercises
    session_exercises = db.relationship("Session_exercise", back_populates="session")
    
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "exercises": [exercise.to_dict() for exercise in self.session_exercises]
        }

