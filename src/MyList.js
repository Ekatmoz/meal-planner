const MyList = ({addMeal, mealPlans, deleteDay, selectedDay, setSelectedDay}) => {

  return ( 
    <div>
      <div>
        <h1>Weekly Meal Plan Ideas</h1>
        <button className="add" onClick={addMeal}>Add</button>
      </div>
      <div>
        {mealPlans.map(({title, id, mealForADay}) => (
          <div className={`meal ${id === selectedDay ? 'selected' : 'default'}`}
          onClick={() => setSelectedDay(id)} key={id}>
            <p>{title}</p>
            <p>{mealForADay.substring(0, 50)}</p>
            <button className="delete" onClick={() => deleteDay(id)}>Delete</button>
          </div>
        ))}
      </div>
    </div> );
}

export default MyList;