from fastapi import FastAPI
import pyodbc
from typing import Annotated

from fastapi import Depends, FastAPI, HTTPException, Query
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional


app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_connection():
    conn = pyodbc.connect(
        "DRIVER={ODBC Driver 17 for SQL Server};"
        "SERVER=localhost;"
        "DATABASE=master;"
        "Trusted_Connection=yes;"
    )
    try:
        yield conn
    finally:
        conn.close()


def fetch_query(conn, query, args=()):
    cursor = conn.cursor()
    cursor.execute(query, args)

    rows = cursor.fetchall()
    results = []
    for row in rows:
        results.append(dict(zip([column[0] for column in cursor.description], row)))

    return results


connectionDep = Annotated[pyodbc.Connection, Depends(get_connection)]


# ---------------------------------------------------------------------------
#
#   Login
#
# ---------------------------------------------------------------------------
class LoginProps(BaseModel):
    username: str
    password: str


@app.post("/login/")
async def login(conn: connectionDep, login: LoginProps):

    data = fetch_query(
        conn,
        """
        SELECT * FROM employee WHERE username = ? AND password = ?;
    """,
        (login.username, login.password),
    )

    if len(data) == 0:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return data[0]


# ---------------------------------------------------------------------------
#
#   Employee
#
# ---------------------------------------------------------------------------
class Employee(BaseModel):
    employee_id: Optional[int] = None
    name: str
    username: str
    password: str
    level: int


@app.get("/employee/")
async def get_employees(conn: connectionDep):
    data = fetch_query(
        conn,
        """
        SELECT * FROM employee;
    """,
    )

    return data


@app.post("/employee/")
async def add_employee(conn: connectionDep, employee: Employee):

    cursor = conn.cursor()
    cursor.execute(
        """
        INSERT INTO employee (name, level, username, password)
        VALUES (?, ?, ?, ?);
    """,
        (employee.name, employee.level, employee.username, employee.password),
    )

    conn.commit()

    cursor.close()

    return employee


@app.put("/employee/")
async def edit_employee(conn: connectionDep, employee: Employee):
    cursor = conn.cursor()

    update_query = """
    UPDATE employee
    SET name = ?, level = ?, username = ?, password = ?
    WHERE employee_id = ?;
    """

    cursor.execute(
        update_query,
        (
            employee.name,
            employee.level,
            employee.username,
            employee.password,
            employee.employee_id,
        ),
    )

    conn.commit()

    cursor.close()

    return employee


@app.delete("/employee/{employee_id}")
async def delete_employee(conn: connectionDep, employee_id: int):

    cursor = conn.cursor()

    delete_query = """
    DELETE FROM employee WHERE employee_id = ?;
    """

    cursor.execute(delete_query, (employee_id,))

    conn.commit()

    cursor.close()

    return {}


# ---------------------------------------------------------------------------
#
#   Area
#
# ---------------------------------------------------------------------------
class Area(BaseModel):
    area_id: Optional[int] = None
    area: str
    program_id: int


@app.get("/area/")
async def get_areas(conn: connectionDep):
    data = fetch_query(
        conn,
        """
        SELECT * FROM area;
    """,
    )

    return data


@app.post("/area/")
async def add_area(conn: connectionDep, area: Area):
    cursor = conn.cursor()
    cursor.execute(
        """
        INSERT INTO area (area, program_id)
        VALUES (?, ?);
    """,
        (area.area, area.program_id),
    )

    conn.commit()

    cursor.close()

    return area


@app.put("/area/")
async def edit_area(conn: connectionDep, area: Area):
    cursor = conn.cursor()

    update_query = """
    UPDATE area
    SET area = ?, program_id = ?
    WHERE area_id = ?;
    """

    cursor.execute(
        update_query,
        (
            area.area,
            area.program_id,
            area.area_id,
        ),
    )

    conn.commit()

    cursor.close()

    return area


@app.delete("/area/{area_id}")
async def delete_area(conn: connectionDep, area_id: int):
    cursor = conn.cursor()

    delete_query = """
    DELETE FROM area WHERE area_id = ?;
    """

    cursor.execute(delete_query, (area_id,))

    conn.commit()

    cursor.close()

    return {}


# ---------------------------------------------------------------------------
#
#   Program
#
# ---------------------------------------------------------------------------
class Program(BaseModel):
    program_id: Optional[int] = None
    version: str
    release: str
    program: str


@app.get("/program/")
async def get_programs(conn: connectionDep):
    data = fetch_query(
        conn,
        """
        SELECT * FROM program;
    """,
    )

    return data


@app.post("/program/")
async def add_program(conn: connectionDep, program: Program):

    cursor = conn.cursor()
    cursor.execute(
        """
        INSERT INTO program (program, version, release)
        VALUES (?, ?, ?);
    """,
        (program.program, program.version, program.release),
    )

    conn.commit()

    cursor.close()

    return program


@app.put("/program/")
async def edit_program(conn: connectionDep, program: Program):
    cursor = conn.cursor()

    update_query = """
    UPDATE program
    SET program = ?, release = ?, version = ?
    WHERE program_id = ?;
    """

    cursor.execute(
        update_query,
        (
            program.program,
            program.release,
            program.version,
            program.program_id,
        ),
    )

    conn.commit()

    cursor.close()

    return program


@app.delete("/program/{program_id}")
async def delete_program(conn: connectionDep, program_id: int):
    cursor = conn.cursor()

    delete_query = """
    DELETE FROM program WHERE program_id = ?;
    """

    cursor.execute(delete_query, (program_id,))

    conn.commit()

    cursor.close()

    return {}
