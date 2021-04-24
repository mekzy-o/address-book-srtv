/**
  * @function filterPassword
  * @description creates a new user in the user database
  * @param {*} data represent user details
  * @returns {object} user object
  */
export const filterPassword = (data) => {
  let userData = data;
  if (!Array.isArray(data)) userData = [data];
  const filteredData = userData.map((singleData) => Object.keys(singleData)
    .reduce((object, key) => {
      if (key !== 'password') object[key] = singleData[key];
      return object;
    }, {}));
  return (filteredData.length === 1 && !Array.isArray(data)) ? filteredData[0] : filteredData;
};
