from import FastAPI, Response, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Field, Session, SQLModel, create_engine, select, Column, LargeBinary
from typing import Optional
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Database setup
DATABASE_URL = "sqlite:///D:/scrimba_airbnb_clone/database/database.db"
engine = create_engine(DATABASE_URL, echo=True)

# Define the Experience model to match the existing table
class Experiences(SQLModel, table=True):
    __table_args__ = {'extend_existing': True}
    __tablename__: str = "experiences"
    id: Optional[int] = Field(default=None, primary_key=True)
    image_filename: str
    star_count: str
    description: str
    starting_price: str
    image_blob: Optional[bytes] = Field(default=None, sa_column=Column(LargeBinary), exclude=True)


def get_session():
    with Session(engine) as session:
        yield session

# Define main route
@app.get("/")
def read_root():
    return {"Hello": "World"}

# API endpoint to get all experiences
@app.get("/api/experiences")
def read_experiences(session: Session = Depends(get_session)):
    experiences = session.exec(select(Experiences)).all()
    
    # Convert Experiences to dict, explicitly excluding image_blob
    response_experiences = [
        {
            "id": exp.id,
            "image_filename": exp.image_filename,
            "star_count": exp.star_count,
            "description": exp.description,
            "starting_price": exp.starting_price
        }
        for exp in experiences
    ]
    json_compatible_data = jsonable_encoder(response_experiences)
    
    return JSONResponse(content=json_compatible_data)

@app.get("/api/image/{experience_id}")
def get_image(experience_id: int, session: Session = Depends(get_session)):
    experience = session.get(Experiences, experience_id)
    if experience and experience.image_blob:
        return Response(content=experience.image_blob, media_type="image/png")
    raise HTTPException(status_code=404, detail="Image not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)