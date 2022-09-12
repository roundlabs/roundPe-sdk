
export const setHostUrl = ( env: string ) => {
    if(env === 'prod'){
        return 'prod url not set';
    }else if (env === 'stage'){
        return 'https://dev-api.roundpe.com/'
    }else {
        return 'dev url not set';
    }
}