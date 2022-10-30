import { Container } from '@mui/material';
import { FieldType } from 'myTypes';
import { useEffect, useState } from 'react';
import { FieldBoard } from '../compontents/FieldBoard';
import styles from './styles.module.scss';


function DashboardPage() {

  const [fields, setFields] = useState<FieldType[]>([]);
  const characters = "ESKISTAFÜNFZEHNZWANZIGDREIVIERTELVORFUNKNACHHALBAELFÜNFEINSXÄMZWEIDREIAUJVIERSECHSNLACHTSIEBENZWÖLFZEHNEUNKUHR";

  useEffect(() => {
        createFields()
  }, [])

  const createFields = () => {
    const defaults = [];
    for(let i = 0; i < characters.length; i++){
      defaults.push({id: i, character: characters[i], color: "RED", on:true})
    }
    setFields(defaults)
  };



  return (
    <div className={styles.dashboardpage}>
      <Container maxWidth="md">
          <FieldBoard fields={fields}></FieldBoard>
      </Container>
    
    </div>
  )
}

export default DashboardPage;