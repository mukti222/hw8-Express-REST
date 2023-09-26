var express = require('express');
const pool = require('./query');
var router = express.Router();




//get semua film
router.get('/film', function(req, res) {
    // Execute a valid SQL query to select data from the "film" table
    pool.query('SELECT * FROM film', (err, result) => {
        if (!err) {
            res.send(result.rows);
        } else {
            console.error(err);
            res.status(500).send('Error fetching data from the database');
        }
    });
});

//get data film tertentu berdasarkan ID
router.get('/film/:filmId', function(req, res) {
    const filmId = req.params.filmId; // Get the film_id from the URL parameter

    // Execute an SQL query to select data from the "film" table based on film_id
    pool.query('SELECT * FROM film WHERE film_id = $1', [filmId], (err, result) => {
        if (!err) {
            if (result.rows.length === 0) {
                // Handle the case where no matching record was found
                res.status(404).send('Film not found');
            } else {
                res.send(result.rows[0]); // Send the first (and presumably only) row
            }
        } else {
            console.error(err);
            res.status(500).send('Error fetching data from the database');
        }
    });
});

//get list kategori
router.get('/listkategori', (req, res) =>{
    pool.query(
        'select * from category', (err, result) =>{
            if (!err) {
                res.send(result.rows);
            } else {
                console.error(err);
                res.status(500).send('Error fetching data from the database');
            }
        }
    )
})

//LOGIKA mencari film berdasarkan category:
/*
table category terdapat 
category_id, dan nama_kategori
table film_category 
terdapat film_id, dan category_id(foreign key)
table film 
terdapat nama_film, dan film_id


buat route GET /film/:nama kategori
misal jika GET /film/animasi
maka mendapat ketegori_id "1"
lalu mendapatkan film_id "6" berdasarkan kategori_id "1"
lalu menampilkan film berdasarkan film_id yang dipilih */

//get film brdsrkan kategori
router.get('/kategorifilm/:name', (req, res) => {
    const { name } = req.params;
  
    // Langkah 1: Mencari film berdasarkan nama_kategori
    pool.query(
      'SELECT film.title FROM film ' +
      'INNER JOIN film_category ON film.film_id = film_category.film_id ' +
      'INNER JOIN category ON film_category.category_id = category.category_id ' +
      'WHERE category.name = $1', // Use $1 as a placeholder
      [name], // Pass name as an array
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error fetching data from the database');
        }
  
        if (result.rows.length === 0) {
          return res.status(404).send('Tidak ada film dalam kategori ini');
        }
  
        const films = result.rows;
        res.json(films);
      }
    );
});


module.exports = router;