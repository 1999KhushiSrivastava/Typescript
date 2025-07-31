import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
    title: string;
    author: string;
    publishedYear: number;
}

const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true }
});

const BookModel = mongoose.model<IBook>('Book', BookSchema);

export default BookModel; // <-- THIS is what you're importing
