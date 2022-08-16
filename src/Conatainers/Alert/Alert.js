import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { ReSetAlert } from '../../redux/action/Alert.action';

function Alert(props) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const alert = useSelector(state => state.alert)
    console.log(alert);

    const dispatch = useDispatch()
    useEffect(() => {
        if (alert.text !== '') {
            enqueueSnackbar(alert.text, {
                variant: alert.color,
                anchorOrigin: {

                    vertical: 'bottom',
                    horizontal: 'left',

                }
                
            });
            setTimeout(dispatch(ReSetAlert()), 2000);
        }

    }, [alert.text])
    return (
        <div>

        </div>
    );
}

export default Alert;