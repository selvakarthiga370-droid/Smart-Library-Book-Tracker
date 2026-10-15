
import { useState } from 'react'
import './App.css'

function App() {
  const [search, setSearch] = useState('')

  const books = [
    { name: 'Java Programming', author: 'James Gosling', shelf: 'A1' },
    { name: 'Web Development', author: 'Jon Duckett', shelf: 'B2' },
    { name: 'Python Basics', author: 'Eric Matthes', shelf: 'C1' },
    { name: 'Database Systems', author: 'Ramez Elmasri', shelf: 'D1' }
  ]

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">
      <header>
        <h2>📚 Smart Library</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#books">Books</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <h1>Welcome to Smart Library</h1>
        <p>Discover books. Learn more. Grow every day.</p>
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      <section className="books" id="books">
        <h2>Available Books</h2>

        <div className="book-list">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <div className="book-card" key={index}>
                <h3>📖 {book.name}</h3>
                <p>Author: {book.author}</p>
                <p>Shelf Location: {book.shelf}</p>
                <span>Available</span>
              </div>
            ))
          ) : (
            <p>No books found.</p>
          )}
        </div>
      </section>

      <footer id="about">
        <p>Smart Library Book Tracker | Learn and Grow</p>
      </footer>
    </div>
  )
}

export default App
