import { Button, Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { FieldBoard } from '../compontents/FieldBoard';
import styles from './styles.module.scss';


function DashboardPage() {

  const [isOn, setIsOn] = useState(true)

  const toggleIsOn = () => {
    setIsOn(!isOn)
  }

  const showTime = () => {
    setIsOn(!isOn)
  }


  return (
    <div className={styles.dashboardpage}>
        <Container maxWidth="md">
            
            <div className={styles.actionContainer}>
                <div className={styles.button}>
                    { isOn ? 
                      <Button variant="contained" color="success" onClick={toggleIsOn}>On</Button>
                      :
                      <Button variant="outlined" color="warning" onClick={toggleIsOn}>Off</Button>
                    }
                </div>
                <div className={styles.button}>
                    <Button variant="outlined" color="info" onClick={showTime}>Show Time</Button>
                </div>
            </div>

          <FieldBoard isOn={isOn}></FieldBoard>

      </Container>
    </div>
  )
}

export default DashboardPage;