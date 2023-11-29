import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignUp(firstName, lastName, fileName) {
  const userPromise =  signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.all([userPromise, photoPromise])
    .then((results) => {
      return results.map((result) => ({
        status: 'resolved',
        value: result,
      }));
    })
    .catch((error) => {
      return [{
        status: 'rejected',
        value: error,
      }];
    });
}
