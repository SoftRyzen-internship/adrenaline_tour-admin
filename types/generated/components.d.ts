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
      Attribute.SetMinMaxLength<{
        minLength: 13;
        maxLength: 13;
      }> &
      Attribute.DefaultTo<'+380979021613'>;
    cz: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 13;
        maxLength: 13;
      }> &
      Attribute.DefaultTo<'+420 (774) 629-006'>;
  };
}

export interface ReviewReviews extends Schema.Component {
  collectionName: 'components_review_reviews';
  info: {
    displayName: 'reviews';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 65;
      }>;
    text: Attribute.Text & Attribute.Required;
    author: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
    date: Attribute.Date & Attribute.Required;
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
      Attribute.DefaultTo<'\u0420\u0456\u0432\u0435\u043D\u044C \u0441\u043A\u043B\u0430\u0434\u043D\u043E\u0441\u0442\u0456 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0443'>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
  };
}

export interface TourDetailsLocation extends Schema.Component {
  collectionName: 'components_tour_details_locations';
  info: {
    displayName: 'location';
    icon: 'pinMap';
  };
  attributes: {
    place: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
  };
}

export interface TourDetailsMeet extends Schema.Component {
  collectionName: 'components_tour_details_meets';
  info: {
    displayName: 'meet';
    icon: 'book';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'\u0414\u0430\u0442\u0430 \u0456 \u043C\u0456\u0441\u0446\u0435 \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0456'>;
    location: Attribute.Component<'tour-details.location', true>;
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
      Attribute.DefaultTo<'\u0412\u0430\u0440\u0442\u0456\u0441\u0442\u044C'>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
  };
}

export interface TourDetailsRoute extends Schema.Component {
  collectionName: 'components_tour_details_routes';
  info: {
    displayName: 'route';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'\u041C\u0430\u0440\u0448\u0440\u0443\u0442'>;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 100;
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
      Attribute.DefaultTo<'\u0421\u0435\u0437\u043E\u043D\u043D\u0456\u0441\u0442\u044C'>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
  };
}

export interface TourActivity extends Schema.Component {
  collectionName: 'components_tour_activities';
  info: {
    displayName: 'activity';
    icon: 'earth';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.DefaultTo<'\u0427\u0438\u043C \u0437\u0430\u0439\u043C\u0435\u043C\u043E\u0441\u044C?'>;
    description: Attribute.RichText &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 1000;
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
    route: Attribute.Component<'tour-details.route'> & Attribute.Required;
    seasons: Attribute.Component<'tour-details.seasonality'> &
      Attribute.Required;
    difficult: Attribute.Component<'tour-details.difficulties'> &
      Attribute.Required;
    price: Attribute.Component<'tour-details.price'> & Attribute.Required;
    meet: Attribute.Component<'tour-details.meet'> & Attribute.Required;
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
      Attribute.DefaultTo<'\u041E\u0440\u0435\u043D\u0434\u0430 \u043E\u0431\u043B\u0430\u0434\u043D\u0430\u043D\u043D\u044F:'>;
    equipment: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 200;
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
      Attribute.DefaultTo<'\u0429\u043E \u0432\u0445\u043E\u0434\u0438\u0442\u044C \u0443 \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C \u0442\u0443\u0440\u0443?'>;
    features: Attribute.Component<'tour.variant', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
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
        maxLength: 60;
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
      'review.reviews': ReviewReviews;
      'tour-details.difficulties': TourDetailsDifficulties;
      'tour-details.location': TourDetailsLocation;
      'tour-details.meet': TourDetailsMeet;
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
