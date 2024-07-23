import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './Styles.css';
import Logo from './Logo.jpg';
import { PDFDownloadLink } from '@react-pdf/renderer';
import DocuPDF from './Generador';

const App = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();//registra los cambios de los datos del formulario y les asigna props
  const [formData, setFormData] = useState(null);//registra la data y la guarda para enviarla al Pdf 

//Hace submit a la data tomada del formulario y limpia los campos del formulario 
  const onSubmit = data => {  
    console.log(data);
    setFormData(data);
    reset();
  };
//Genera campos tipo checkbox y les asigna un nombre 
  const checkboxes = [
    { label: 'Arthritis', name: 'art' },
    { label: 'Diabetes', name: 'diab' },
    { label: 'Heart problems', name: 'hrtp' },
    { label: 'Osteoporosis', name: 'oste' },
    { label: 'Circulatory Problems', name: 'cirp' },
    { label: 'Epilepsy/Seizures', name: 'eps' },
    { label: 'High Blood Pressure', name: 'pres' },
    { label: 'Sciatica', name: 'sci' },
    { label: 'Contagious disease', name: 'cont' },
    { label: 'Headaches/Migraine', name: 'mig' },
    { label: 'Joint inflammation', name: 'inflam' },
    { label: 'Varicose Veins', name: 'vein' },
  ];

  return (
    <div>
      <form className='Form' onSubmit={handleSubmit(onSubmit)}>
        <img type='image' alt='Logo' className='logo' src={Logo}/>
        <h1>NainTa SPA</h1>
        <h3>Your personal information will remain confidential.</h3>
        <h3>These questions will help us serve you better in your NITS sessions.</h3>
        
        <section className='sct'>
          <h2>General information</h2>     
          <div>
            <input className='dts' type="text" placeholder="Complete Name" {...register("name", {required: true, maxLength: 80})} />
            {errors.name && <span>This field is required</span>}
            <input className='dts' type="date" placeholder="Birth Date" {...register("date", {required: true})} />
            {errors.date && <span>This field is required</span>}
            <input className='dts' type="text" placeholder="City" {...register("city", {required: true, maxLength: 50})} />
            {errors.city && <span>This field is required</span>}
            <input className='dts' type="text" placeholder="State" {...register("state", {required: true, maxLength: 50})} />
            {errors.state && <span>This field is required</span>}
            <input className='dts' type="text" placeholder="Address" {...register("address", {required: true, maxLength: 200})} />
            {errors.address && <span>This field is required</span>}
            <input className='dts' type="number" placeholder="Mobile number" {...register("mobileNumber", {required: true, minLength: 6, maxLength: 12})} />
            {errors.mobileNumber && <span>This field is required</span>}
            <input className='dts' type="email" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
            {errors.email && <span>This field is required</span>}
        
            <div>
              <label>How did you hear about us?</label> 
              <input className='dts' type="text" {...register("Prg1", {required: true, maxLength: 200})} />
              {errors.Prg1 && <span>This field is required</span>}
            </div>
            <div>
              <label>What do you do?</label>
              <input className='dts' type="text" {...register("Prg2", {required: true, maxLength: 200})} />
              {errors.Prg2 && <span>This field is required</span>}
            </div>
          </div>
        </section>

        <section>
          <h2>General health history</h2>  
          <div>
            <label>What is your main objective today? (injury recovery, pain relief, relaxation)</label>
            <input className='dts' type="text" {...register("Prg3", {required: true, maxLength: 200})} />
            {errors.Prg3 && <span>This field is required</span>}
          </div>
          <h3>Do you have a history of any of the following conditions?</h3>
          <div className='boxes'>
            {checkboxes.map((checkbox, index) => (
              <div key={index}>
                <label className='lbl'>{checkbox.label}</label>
                <input className='box' type="checkbox" {...register(checkbox.name)} />
              </div>
            ))}
          </div>
        </section>

        <section className='sct'>
          <div>
            <div>
              <label className='prg'>Are you pregnant?</label>
              <select className='dts' {...register("Prg4", { required: true })}>
                {errors.prg4 && <span>This field is required</span>}
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <label className='prg'>If so, how many weeks?</label>
              <input className='dts' type="number" {...register("Prg5", { maxLength: 200 })} />
              {errors.Prg5 && <span>This field is required</span>}
            </div>
            <div>
              <label>Do you have allergies? (Please explain)</label>
              <input className='dts' type="text" {...register("Prg6", {required: true, maxLength: 200})} />
              {errors.Prg6 && <span>This field is required</span>}
            </div>
            <div>
              <label>Are you currently taking medication? If so, which one?</label>
              <input className='dts' type="text" {...register("Prg7", {required: true, maxLength: 200})} />
              {errors.Prg7 && <span>This field is required</span>}
            </div>
            <div>
              <label>Write down any injuries or pain you have experienced in the past, including any major trauma (surgery or accident)</label>
              <input className='dts' type="text" {...register("Prg8", { maxLength: 200 })} />
              {errors.Prg8 && <span>This field is required</span>}
            </div>
          </div>
        </section>

        <section className='sct'>
          <div>
            <div>
              <label className='prg'>Have you ever experienced a professional massage before?</label>
              <select className='dts' {...register("Prg9", { required: true })}>
                {errors.Prg9 && <span>This field is required</span>}
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <label className='prg'>Pressure preference?</label>
              <select className='dts' {...register("Prg10", { required: true })}>
                {errors.Prg10 && <span>This field is required</span>}
                <option value="low">Low</option>
                <option value="mid">Medium</option>
                <option value="firm">Firm</option>
              </select>
            </div>
            <div className='prg'> 
              <label>Is there an area of the body that you would like the therapist to focus on?</label>
              <input className='dts' type="text" {...register("Prg11", {required: true, maxLength: 200})} />
              {errors.Prg11 && <span>This field is required</span>}
            </div>
            <div className='prg'>      
              <label>Are there any areas of the body that the therapist should avoid?</label>
              <input className='dts' type="text" {...register("Prg12", { maxLength: 200 })} />
              {errors.Prg12 && <span>This field is required</span>}
            </div>
          </div>
        </section>

        <button className='btn' type="submit">Aceptar y Enviar</button>
      </form>
      {formData && (
        <PDFDownloadLink className='lnk'
          document={<DocuPDF formData={formData} />} 
          fileName="formulario.pdf"
        >
          {({ loading }) => (loading ? 'Cargando documento...' : 'Descargar PDF')}
        </PDFDownloadLink>
      )}
    </div>
  );
}

export default App;
