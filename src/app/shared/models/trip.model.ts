
export class Trip {
  _id: string;          // a database document id
  _rev: string;
  
  type: string = 'trip';

  title: string = '';
  description: string = '';
  location: string;

  country: string;
  
  startDate: string;
  endDate: string;

  createdAt: string;
  updatedAt: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}