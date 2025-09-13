import React,{useState,useMemo} from 'react'


/* --- Menu List --- */
function MenuList({ menu, setMenu }) {
  const [search,setSearch]=useState(""); 
  const [catagory,setCatagory]=useState("all");
  const filtered=useMemo(()=>{
    return menu.filter(m=>{
      const matchCat=catagory==="all"||m.catagory===catagory;
      const matchSearch=(m.name+" "+m.catagory).toLowerCase().includes(search.toLowerCase());
      return matchCat&&matchSearch;
    });
  },[menu,catagory,search]);

  const toggleAvail=_id=>setMenu(prev=>prev.map(m=>m._id===_id?{...m,available:!m.available}:m));
  const deleteItem=_id=>setMenu(prev=>prev.filter(m=>m._id!==_id));

  return (
    <div>
      <div className="d-flex gap-2 mb-3">
        <input type="text" className="form-control rounded-pill" placeholder="Search menu…" value={search} onChange={e=>setSearch(e.target.value)} />
        <select className="form-select w-auto rounded-pill" value={catagory} onChange={e=>setCatagory(e.target.value)}>
          <option value="all">All</option><option>Pizza</option><option>Indian</option><option>Burger</option><option>Chinese</option>
        </select>
      </div>
      <div className=" shadow-sm">
        <div className="card-header fw-bold">Menu List</div>
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light"><tr><th>Item</th><th>Catagory</th><th>Price</th><th>Status</th><th></th></tr></thead>
            <tbody>
              {filtered.map(m=>(
                <tr key={m._id}>
                  <td>{m.name}</td><td>{m.catagory}</td><td>₹{m.price}</td>
                  <td>
                    <div className="form-check form-switch">
                      <input type="checkbox" className="form-check-input" checked={m.available} onChange={()=>toggleAvail(m._id)} />
                      {/* <label className="form-check-label">{m.available?"Available":"Unavailable"}</label>
                      {m.bestseller && <span className="badge bg-primary ms-2">Bestseller</span>} */}
                    </div>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-outline-primary me-1">Edit</button>
                    <button className="btn btn-sm btn-outline-danger" onClick={()=>deleteItem(m._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MenuList