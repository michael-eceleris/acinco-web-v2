import React, {useState, useEffect, useContext} from 'react';
import FormContext from '../context/form/formContext';
import docs from '../data/documents.json';
import MoreInfo from './MoreInfo'
const Documents = () => {
  const formContext = useContext(FormContext);
  const { coverage, selectDocument } = formContext;
  const Docs = docs.find(doc => doc.coverageId === coverage);
  const documents  = [];
  const [loadDocuments, setLoadDocuments] = useState(false);

  const onLoad = (e) => {
    documents.push(e.target.value)
    if(documents.length === Docs.documents.length) {
      setLoadDocuments(true);
      selectDocument(documents);
    }else{
      setLoadDocuments(false);
    }
  }
  return ( 
    <div>
      {Docs.documents.map( doc => (
        <div className="Campo-form" onChange={onLoad}>
          <label>{doc}</label>
          <input 
            type="file"
            required
          />
        </div>
      ))}
      {loadDocuments ? <MoreInfo /> : null}
    </div>
  );
}
export default Documents;