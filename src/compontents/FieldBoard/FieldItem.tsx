import React, {Component, FC, PropsWithChildren} from "react";
import styles from './styles.module.scss';
import {Grid} from "@mui/material";
import { FieldProps } from 'myTypes';

export const FieldItem: FC<FieldProps> = ({field}): JSX.Element => {

return (
    <Grid item xs={1}>
            <div className={styles.fieldItem}>
                <p>{field.id}</p>
            </div>
    </Grid>

    )
}