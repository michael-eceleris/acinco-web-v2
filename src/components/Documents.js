import React, {useState, useEffect} from 'react';
import MoreInfo from './MoreInfo'
const Documents = ({coverageSelect}) => {
  const { coverage } = coverageSelect;
  const [submit, setSubmit] = useState(null)
  console.log(coverage)
  const onSubmit = e => {
    e.preventDefault()
    setSubmit(true);
  }
  return ( 
    <div>
      <form
        onSubmit={onSubmit}
      >
        {coverage ? (
          <div className="Campo-form">
            <input 
              type="file"
            />
          </div>
        ) : null}
        <div className="Campo-form">
          <input 
            type="submit"
            className=" btn btn-primario btn-block"
            value="Submit documentos"
          />
        </div>
      </form>
      {submit ? <MoreInfo /> : null}
    </div>
  );
}
export default Documents;