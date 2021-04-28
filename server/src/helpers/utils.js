/**
  * @function filterPassword
  * @description creates a new user in the user database
  * @param {*} data represent user details
  * @returns {object} user object
  */
export const filterOutFields = (data) => {
  let userData = data.dataValues;
  const filterOutKeys = ['password', 'createdAt', 'updatedAt'];
  if (!Array.isArray(data)) userData = [data.dataValues];
  const filteredData = userData.map((singleData) => Object.keys(singleData)
    .reduce((object, key) => {
      if (!filterOutKeys.includes(key)) object[key] = singleData[key];
      return object;
    }, {}));
  return (filteredData.length === 1 && !Array.isArray(data)) ? filteredData[0] : filteredData;
};
