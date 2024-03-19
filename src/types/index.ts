export type RemoveIndex<T> = {
	[ K in keyof T as string extends K ? 
		never : number extends K ?
		never : symbol extends K ?
		never : K
	]: T[K];
};

export type DirectExtract<
	T,
	K extends keyof RemoveIndex<T>,
	S = Pick<Required<RemoveIndex<T>>, K>
> =
	S extends Record<K, S[keyof S]> ?
	S[keyof S] : never;