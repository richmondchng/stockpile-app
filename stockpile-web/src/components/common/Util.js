import uuid from 'react-uuid';

/**
 * Generate Id if supplied id is empty
 * @param {*} id 
 * @returns id
 */
export const getComponentId = (id) => {
    return id ? id : uuid();
}