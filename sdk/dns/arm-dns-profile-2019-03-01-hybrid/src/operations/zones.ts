/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/zonesMappers";
import * as Parameters from "../models/parameters";
import { DnsManagementClientContext } from "../dnsManagementClientContext";

/** Class representing a Zones. */
export class Zones {
  private readonly client: DnsManagementClientContext;

  /**
   * Create a Zones.
   * @param {DnsManagementClientContext} client Reference to the service client.
   */
  constructor(client: DnsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates a DNS zone. Does not modify DNS records within the zone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ZonesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, zoneName: string, parameters: Models.Zone, options?: Models.ZonesCreateOrUpdateOptionalParams): Promise<Models.ZonesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, zoneName: string, parameters: Models.Zone, callback: msRest.ServiceCallback<Models.Zone>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param parameters Parameters supplied to the CreateOrUpdate operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, zoneName: string, parameters: Models.Zone, options: Models.ZonesCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.Zone>): void;
  createOrUpdate(resourceGroupName: string, zoneName: string, parameters: Models.Zone, options?: Models.ZonesCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.Zone>, callback?: msRest.ServiceCallback<Models.Zone>): Promise<Models.ZonesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ZonesCreateOrUpdateResponse>;
  }

  /**
   * Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation
   * cannot be undone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param [options] The optional parameters
   * @returns Promise<Models.ZonesDeleteMethodResponse>
   */
  deleteMethod(resourceGroupName: string, zoneName: string, options?: Models.ZonesDeleteMethodOptionalParams): Promise<Models.ZonesDeleteMethodResponse> {
    return this.beginDeleteMethod(resourceGroupName,zoneName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ZonesDeleteMethodResponse>;
  }

  /**
   * Gets a DNS zone. Retrieves the zone properties, but not the record sets within the zone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param [options] The optional parameters
   * @returns Promise<Models.ZonesGetResponse>
   */
  get(resourceGroupName: string, zoneName: string, options?: msRest.RequestOptionsBase): Promise<Models.ZonesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param callback The callback
   */
  get(resourceGroupName: string, zoneName: string, callback: msRest.ServiceCallback<Models.Zone>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, zoneName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Zone>): void;
  get(resourceGroupName: string, zoneName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Zone>, callback?: msRest.ServiceCallback<Models.Zone>): Promise<Models.ZonesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        zoneName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ZonesGetResponse>;
  }

  /**
   * Lists the DNS zones within a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.ZonesListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: Models.ZonesListByResourceGroupOptionalParams): Promise<Models.ZonesListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: Models.ZonesListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: Models.ZonesListByResourceGroupOptionalParams | msRest.ServiceCallback<Models.ZoneListResult>, callback?: msRest.ServiceCallback<Models.ZoneListResult>): Promise<Models.ZonesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ZonesListByResourceGroupResponse>;
  }

  /**
   * Lists the DNS zones in all resource groups in a subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.ZonesListResponse>
   */
  list(options?: Models.ZonesListOptionalParams): Promise<Models.ZonesListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.ZonesListOptionalParams, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  list(options?: Models.ZonesListOptionalParams | msRest.ServiceCallback<Models.ZoneListResult>, callback?: msRest.ServiceCallback<Models.ZoneListResult>): Promise<Models.ZonesListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ZonesListResponse>;
  }

  /**
   * Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation
   * cannot be undone.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param zoneName The name of the DNS zone (without a terminating dot).
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, zoneName: string, options?: Models.ZonesBeginDeleteMethodOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        zoneName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists the DNS zones within a resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ZonesListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ZonesListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ZoneListResult>, callback?: msRest.ServiceCallback<Models.ZoneListResult>): Promise<Models.ZonesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.ZonesListByResourceGroupNextResponse>;
  }

  /**
   * Lists the DNS zones in all resource groups in a subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ZonesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ZonesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ZoneListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ZoneListResult>, callback?: msRest.ServiceCallback<Models.ZoneListResult>): Promise<Models.ZonesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ZonesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Zone,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Zone
    },
    201: {
      bodyMapper: Mappers.Zone
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Zone
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Network/dnszones",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.top,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/dnsZones/{zoneName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.zoneName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ZoneDeleteResult
    },
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ZoneListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
