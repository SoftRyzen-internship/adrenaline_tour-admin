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

export interface TourDetailsDifficulties extends Schema.Component {
  collectionName: 'components_tour_details_difficulties';
  info: {
    displayName: 'difficulties';
    icon: 'walk';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0420\u0456\u0432\u0435\u043D\u044C \u0441\u043A\u043B\u0430\u0434\u043D\u043E\u0441\u0442\u0456 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0443'>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface TourDetailsPrice extends Schema.Component {
  collectionName: 'components_tour_details_prices';
  info: {
    displayName: 'price';
    icon: 'database';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C'>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface TourDetailsRoute extends Schema.Component {
  collectionName: 'components_tour_details_routes';
  info: {
    displayName: 'route';
    icon: 'pinMap';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u041C\u0430\u0440\u0448\u0440\u0443\u0442'>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

export interface TourDetailsSeasonality extends Schema.Component {
  collectionName: 'components_tour_details_seasonalities';
  info: {
    displayName: 'seasonality';
    icon: 'cloud';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u0421\u0435\u0437\u043E\u043D\u043D\u0456\u0441\u0442\u044C'>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
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

export interface TourDetails extends Schema.Component {
  collectionName: 'components_tour_details';
  info: {
    displayName: 'details';
    icon: 'book';
    description: '';
  };
  attributes: {
    route: Attribute.Component<'tour-details.route'>;
    seasons: Attribute.Component<'tour-details.seasonality'>;
    difficult: Attribute.Component<'tour-details.difficulties'>;
    price: Attribute.Component<'tour-details.price', true>;
  };
}

export interface TourRent extends Schema.Component {
  collectionName: 'components_tour_rents';
  info: {
    displayName: 'rent';
    icon: 'database';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'\u041E\u0440\u0435\u043D\u0434\u0430 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u043D\u044F:'>;
    equipment: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
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
    features: Attribute.Component<'tour.variant', true>;
  };
}

export interface TourVariant extends Schema.Component {
  collectionName: 'components_tour_variants';
  info: {
    displayName: 'features';
    icon: 'puzzle';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    included: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contact.phones': ContactPhones;
      'tour-details.difficulties': TourDetailsDifficulties;
      'tour-details.price': TourDetailsPrice;
      'tour-details.route': TourDetailsRoute;
      'tour-details.seasonality': TourDetailsSeasonality;
      'tour.activity': TourActivity;
      'tour.details': TourDetails;
      'tour.rent': TourRent;
      'tour.services': TourServices;
      'tour.variant': TourVariant;
    }
  }
}
