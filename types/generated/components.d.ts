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

export interface TourRent extends Schema.Component {
  collectionName: 'components_tour_rents';
  info: {
    displayName: 'rent';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    equipment: Attribute.Text;
  };
}

export interface TourServices extends Schema.Component {
  collectionName: 'components_tour_services';
  info: {
    displayName: 'services';
    icon: 'handHeart';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0429\u043E \u0432\u0445\u043E\u0434\u0438\u0442\u044C \u0443 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0442\u0443\u0440\u0443?'>;
    item: Attribute.Component<'tour.variant', true>;
  };
}

export interface TourVariant extends Schema.Component {
  collectionName: 'components_tour_variants';
  info: {
    displayName: 'variant';
    icon: 'puzzle';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u041E\u0440\u0435\u043D\u0434\u0430 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u043D\u044F:'>;
    included: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.phones': ContactPhones;
      'tour.activity': TourActivity;
      'tour.rent': TourRent;
      'tour.services': TourServices;
      'tour.variant': TourVariant;
    }
  }
}
