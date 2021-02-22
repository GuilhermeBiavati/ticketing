import axios from 'axios';
import { useState } from 'react';

export default function useRequest({ url, method, body, onSuccess }) {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      console.log('aqui');

      setErrors(null);
      const response = await axios[method](url, { ...body, ...props });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (error) {
      console.log(error.response);

      setErrors(
        <div className="alert alert-danger">
          <h4>Ooooops....</h4>
          <ul className="my-0">
            {error.response.data.errors.map((error, index) => (
              <li key={index}>{error.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
}
