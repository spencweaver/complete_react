const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Shirts',
    }
  ]
  return (
    <div className="categories-container">
      {categories.map(({title}) => (
        <div className="category-container">
          <img className='background-image' src='https://media.istockphoto.com/id/523633973/photo/golden-retriever-puppy.jpg?s=612x612&w=is&k=20&c=buTVqvXlrNTEXa0ywk98FsL0azTa9-YcoeCRJb3pwws=' />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      )

      )}

    </div>
  );
}

export default App;
