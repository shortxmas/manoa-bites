import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const IssueSchema = Yup.object({
  topic: Yup.string().oneOf(['bug', 'feature', 'wronginformation', 'other']).required(),
  description: Yup.string().required(),
});

export interface Restaurant {
  id: number;
  locationId: number;
  postedById: number;
  name: string;
  website: string;
  phone: string;
  menuLink: string;
  onlineOrderLink: string;
  favoritedBy: string;
}
