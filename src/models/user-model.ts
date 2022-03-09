// import mongoose from 'mongoose';
// export {};

// const userSchema = new mongoose.Schema(
// 	{
// 		first_name: { type: String },
// 		last_name: { type: String },
// 		email: {
// 			type: String,
// 			required: true,
// 			unique: true,
// 			index: true,
// 			dropDups: true
// 		},
// 		password: { type: String },
// 		deleted: { type: Boolean, default: false }
// 	},
// 	{
// 		timestamps: true
// 	}
// );

// const userModel = mongoose.model('User', userSchema);

// export default userModel;

// User schema
export interface IUser {
	id: number;
	name: string;
	email: string;
}

/**
 * Get a new User object.
 *
 * @returns
 */
function getNew(name: string, email: string): IUser {
	return {
		id: -1,
		email,
		name
	};
}

/**
 * Copy a user object.
 *
 * @param user
 * @returns
 */
function copy(user: IUser): IUser {
	return {
		id: user.id,
		email: user.email,
		name: user.name
	};
}

// Export default
export default {
	new: getNew,
	copy
};
