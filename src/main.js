import swal from 'sweetalert';

const promiseAlert = (...params) => new Promise((resolve, reject) => {

    let paramsObj;

    if(typeof params[0] === 'string') {
        const [ title, text, type ] = params;
        paramsObj = {
            title,
            text,
            type,
            closeOnConfirm: false
        };
    } else if(typeof params[0] === 'object') {
        paramsObj = Object.assign({}, params[0]);
    } else {
        reject(new Error('You must pass in a string or an object as the first parameter of promiseAlert'));
    }

    swal(
        paramsObj,
        res => {
            swal.close();
            resolve(res);
        }
    );

});

export default promiseAlert;
