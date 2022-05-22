//created with https://app.quicktype.io/ with minor manual changes
export interface IAppointment {
  id:                     string;
  date:                   string;
  maxInviteeCount:        number;
  attendeeCount:          number;
  showContactInformation: boolean;
  contact:                IContact;
  property:               IProperty;
  __typename:             string;
}

export interface IContact extends IUserBaseData {
  email:     string;
  mobile:    string;
  address:   IAddress;
  fullName:  string;
}

export interface IProperty {
  id:           string;
  name:         string;
  inviteeCount: number;
  address:      IAddress;
  attachments:  any[];
  user:         IUser;
  __typename:   string;
}

export interface IAddress {
  street:      string;
  houseNumber: string;
  city:        string;
  country:     string;
  zipCode:     string;
  __typename:  string;
}

export interface IUser {
  profile:    Profile;
  usertype:   string;
  __typename: string;
}

export interface Profile extends IUserBaseData {
  gender:    string;
  title:     string;
}

export interface IUserBaseData {
  firstname: string;
  name:      string;
  phone:     string;
}
