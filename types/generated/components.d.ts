import type { Schema, Attribute } from '@strapi/strapi';

export interface ContactPhones extends Schema.Component {
  collectionName: 'components_contact_phones';
  info: {
    displayName: 'phones';
    icon: 'phone';
    description: '';
  };
  attributes: {
    ua: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'+38 (097) 9021613'>;
    cz: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'+420 (774) 629-006'>;
  };
}

export interface TourActivity extends Schema.Component {
  collectionName: 'components_tour_activities';
  info: {
    displayName: 'activity';
    icon: 'earth';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0427\u0438\u043C \u0437\u0430\u0439\u043C\u0435\u043C\u043E\u0441\u044C?'>;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.phones': ContactPhones;
      'tour.activity': TourActivity;
    }
  }
}
