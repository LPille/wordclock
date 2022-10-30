import React, {} from "react";
import { FieldItem } from "./FieldItem";
import styles from './styles.module.scss';
import { Grid } from "@mui/material";
import { dahsboardType } from "myTypes";


export const FieldBoard: React.FC<dahsboardType> = (props: dahsboardType) => {
   
    return (
        <section>
            <div className={styles.dahsboard}>
                <Grid container rowSpacing={2} columnSpacing={1} columns={11} > 
                    {props.fields.map(field =>(
                        <FieldItem key={field.id} field={field}/>
                        ))}
                </Grid>
            </div>
        </section>
    )
}
