import React from 'react';
import httpRequest from '@root/Utilities/httpRequest';
import { useSelector } from 'react-redux';

const withAuth = Comp => {

   

    return props => {
        const { token } = useSelector(state => state.user);

        const arrEclusions = [
            { url: '/api/login', type: 'all' },
            { url: '/api/register', type: 'all' }
          ];
    
          const GetHeaders = (Headers, url) => {
            let objHeaders = {};
            if (
              arrEclusions.filter(
                item => item.url === url.replace(window.location.origin, '') && item.type === 'all'
              ).length === 0
            ) {
              objHeaders = {
                authorization: `Token ${token}`,
               ...Headers
              };
            }
            return objHeaders;
          };
        
        httpRequest.interceptors.request.use(
            config => {
              if (config.method === 'post') {
                return {
                  ...config,
                  headers: GetHeaders(config.headers, config.url)
                };
              }
              return config;
            },
            error => {
              // commented due to empty bracket, either put something meaningful or remove this code
              // if (DEBUG) {}
              return Promise.reject(error);
            }
          );


          return <Comp {...props} />
    }

};

export default withAuth;