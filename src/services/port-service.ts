import portDao from '@daos/port-dao';
import { IUser } from '@models/port-model';
import { UserNotFoundError } from '@shared/errors';



/**
 * Get all ports.
 * 
 * @returns 
 */
function getAll(): Promise<IUser[]> {
    return portDao.getAll();
}


/**
 * Add one port.
 * 
 * @param port 
 * @returns 
 */
function addOne(port: IUser): Promise<void> {
    return portDao.add(port);
}


/**
 * Update one port.
 * 
 * @param port 
 * @returns 
 */
async function updateOne(port: IUser): Promise<void> {
    const persists = await portDao.persists(port.id);
    if (!persists) {
        throw new UserNotFoundError();
    }
    return portDao.update(port);
}


/**
 * Delete a port by their id.
 * 
 * @param id 
 * @returns 
 */
async function deleteOne(id: number): Promise<void> {
    const persists = await portDao.persists(id);
    if (!persists) {
        throw new UserNotFoundError();
    }
    return portDao.delete(id);
}


// Export default
export default {
    getAll,
    addOne,
    updateOne,
    delete: deleteOne,
} as const;
