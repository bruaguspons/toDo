const pool = require('./../db');

const getAllTasks = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM task;')
        res.json(result.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

const getTask = async(req, res) => {
    try {
        const {id} = req.params;
        const {rows} = await pool.query('SELECT * FROM task WHERE id = $1', [id])
        return !rows.length ? res.status(404).json({message: "Task not found"}) : res.json(rows[0])
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const postTask = async(req, res, next) => {
    const {title, description} = req.body 
    try {
        const result = await pool.query('INSERT INTO task(title, description) VALUES ($1, $2) RETURNING *;', [title, description])
        res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
    
}

const deleteTask = async(req, res) => {
    try {
        const {id} = req.params;
        const {rowCount} = await pool.query('DELETE FROM task WHERE id = $1', [id])
        
        return !!rowCount ? res.sendStatus(204) : res.status(404).json({message: "Task not found"})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updateTask = async(req, res) => {
    try {
        const {id} = req.params;
        const {title, description} = req.body
        const {rowCount, rows} = await pool.query('UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, id])
        return !!rowCount ? res.json(rows[0]) : res.status(404).json({message: "Task not found"})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
}

module.exports = {
    getAllTasks,
    getTask,
    postTask,
    deleteTask,
    updateTask
}