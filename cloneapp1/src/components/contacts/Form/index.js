import {useState ,useEffect} from 'react';
//2
const initialFormValues = {fullname : "", phone_number : ""};
function Form({addContact, contacts}) {
    //1 const [form , setForm] = useState({fullname : "", phone_number : ""});
    // 2
    const [form , setForm] = useState(initialFormValues);
    useEffect(() => {  //contacts değişmiş is inputun içi boşalt(submit yerine)
        //3
        setForm(initialFormValues);
    }, [contacts])
    const onChangeInput = (e) => { //inputa değerler girebiliyoruz.
        setForm({...form, [e.target.name]: e.target.value});
    };
    const onSubmit = (e) =>{
        e.preventDefault(); //yenilenmeyi engeller ve değerleri basar
        if(form.fullname === "" || form.phone_number === ""){ //textleri kontrol eder ve herhangi bir boş olursa döndermez.
            return false;
        }
        addContact([...contacts, form]); //eski verileri koruyarak atama işlemi yaparız.
        //console.log(form)
        //1 setForm({ fullname : "", phone_number : ""}); //butona basınca input içlerini temizledik.
        //2
        //setForm(initialFormValues); // yukarıda useEfecte ekledik
    };
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input 
                name='fullname' 
                placeholder='Full Name' 
                value={form.fullname}
                onChange={onChangeInput} /* placeholder text ne girileceğinini bilgilendirilmesi(hint gibi)  */
                />
            </div>
            <div>
                <input 
                name='phone_number' 
                placeholder='Phone Nmuber'
                value={form.phone_number} 
                onChange={onChangeInput}
                />
            </div>
            <div className='btn'>
                <button>Add</button>
            </div>
        </form>
  )
}
export default Form