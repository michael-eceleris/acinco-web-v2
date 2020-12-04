import React, {useState, useRef, useContext, Fragment} from 'react';
import FormContext from '../context/form/formContext';
const Documents = () => {
  const formContext = useContext(FormContext);
  const { documentsCoverage, coverage, selectDocument } = formContext;
  let documents = [];
  const [loadDocuments, setLoadDocuments] = useState(null);
  const [document, setDocument] = useState([])
  const onLoad = (e) => {
    setDocument(
      {
        ...document,
      nombre_documento_save: e.target.name,
      doc: e.target.value
      }
    )
    if(documents.length === documentsCoverage.length) {
      setLoadDocuments(true);
      selectDocument(document);
    }else{
      setLoadDocuments(false);
    }
  }
  return ( 
    <Fragment>
      {documentsCoverage.map( doc => (<Fragment key={doc.id}>
        <label>{doc.nombre_documento_save}</label>
        <div className="Campo-form" /* onChange={onLoad} */ >
          <input 
            name={doc.nombre_documento_save}
            type="file"
            required
            accept=".pdf"
            onChange={onLoad}
          />
        </div>
        </ Fragment>
      ))}
    </Fragment>
  );
}
export default Documents;