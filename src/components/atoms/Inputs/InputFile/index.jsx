import { Field } from 'formik';
import React from 'react'

const InputFile = (props) => {
    const{name, label, ...rest} = props;
    const MAX_FILE_SIZE = 5120
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };
    
    const handlePhoto = async (e, setFieldValue) => {
        const file = e.target.files[0];
        
        if (file?.size / 1024 < MAX_FILE_SIZE ) {
            const base64 = await convertToBase64(file);
            setFieldValue('image', base64);
        }
        else {
            toast.error('El tamaño de la imagen debe ser menor a 5MB');
        };
    }

  return (
    <div className="c-input-file">
    <label className="c-input-file__label">{label}</label>
    <div className="c-input-file__content">
      <Field name={name} {...rest} >
       {/* <input type="file" name={name} accept="image/png, image/jpeg"></input> */}
       {({ form, field }) => {
                    const { setFieldValue } = form
                    return (
                        <input
                            type="file"
                            // className='form-control'
                            accept="image/png, image/jpeg"
                            onChange={(e) => handlePhoto(e, setFieldValue)}
                        />
                    )
                }}
      </Field>
    </div>
  </div>
  )
}

export default InputFile