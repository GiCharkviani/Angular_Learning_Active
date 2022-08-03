import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {};

const pluralNames = { Country: 'Countries', Person: 'Persons' };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
