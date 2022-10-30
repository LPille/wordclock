import { FC } from "react";
import styles from './styles.module.scss';
import {Grid} from "@mui/material";
import { FieldProps } from 'myTypes';

export const FieldItem: FC<FieldProps> = (props: FieldProps): JSX.Element => {

return (
    <Grid item xs={1}>
        <div className={styles.fieldItem}>
            <p>{props.field.id}</p>
        </div>
    </Grid>

    )
}