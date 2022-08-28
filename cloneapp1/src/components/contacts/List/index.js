import {useState} from 'react';
function List({contacts}) {
  const [filterText, setFilterText] = useState('');
  const filtered = contacts.filter((item) => { //array in döndüğü her elemanı bize verecek(item)
    return Object.keys(item).some((key) => // ismide yazsa numarayıda yazsa bunu göstermemiz lazım(object'in(itemin) keylerini veriyor) //some herhangibiri şarta uyuyorsa true dönüyor ve ekrana getiriyor
      item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase())
      ); 
  });
  return (
    <div>
      <input placeholder='Filter contacts' value={filterText} onChange={(e) => setFilterText(e.target.value)}/>  
      <ul className='list'>
        {filtered.map((contacts,i) => (
          <li key={i}>
            <span>{contacts.fullname}</span>
            <span>{contacts.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>Total contacts ({filtered.length})</p>
    </div>
  )
}
export default List;