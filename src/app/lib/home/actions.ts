'use server';

import { log } from "console";

export async function signupUser(prevState: any, formData: FormData) {

    log(formData);
    return {
        message: 'User signed up successfully'
    };
}