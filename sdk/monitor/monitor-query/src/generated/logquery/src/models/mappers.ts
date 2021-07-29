/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const QueryResults: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryResults",
    modelProperties: {
      tables: {
        serializedName: "tables",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Table"
            }
          }
        }
      },
      statistics: {
        serializedName: "statistics",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      render: {
        serializedName: "render",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorInfo"
        }
      }
    }
  }
};

export const Table: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Table",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      columns: {
        serializedName: "columns",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Column"
            }
          }
        }
      },
      rows: {
        serializedName: "rows",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Sequence",
              element: {
                type: {
                  name: "Dictionary",
                  value: { type: { name: "any" } }
                }
              }
            }
          }
        }
      }
    }
  }
};

export const Column: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Column",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorInfo: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorInfo",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      innererror: {
        serializedName: "innererror",
        type: {
          name: "Composite",
          className: "ErrorInfo"
        }
      },
      additionalProperties: {
        serializedName: "additionalProperties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ErrorDetail: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      resources: {
        serializedName: "resources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      additionalProperties: {
        serializedName: "additionalProperties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ErrorResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorInfo"
        }
      }
    }
  }
};

export const QueryBody: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryBody",
    modelProperties: {
      query: {
        serializedName: "query",
        required: true,
        type: {
          name: "String"
        }
      },
      timespan: {
        serializedName: "timespan",
        type: {
          name: "String"
        }
      },
      workspaces: {
        serializedName: "workspaces",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MetadataResults: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataResults",
    modelProperties: {
      categories: {
        constraints: {
          UniqueItems: true
        },
        serializedName: "categories",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataCategory"
            }
          }
        }
      },
      resourceTypes: {
        constraints: {
          UniqueItems: true
        },
        serializedName: "resourceTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataResourceType"
            }
          }
        }
      },
      solutions: {
        constraints: {
          UniqueItems: true
        },
        serializedName: "solutions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataSolution"
            }
          }
        }
      },
      tables: {
        constraints: {
          UniqueItems: true
        },
        serializedName: "tables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataTable"
            }
          }
        }
      },
      functions: {
        constraints: {
          UniqueItems: true
        },
        serializedName: "functions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataFunction"
            }
          }
        }
      },
      queries: {
        constraints: {
          UniqueItems: true
        },
        serializedName: "queries",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataQuery"
            }
          }
        }
      },
      applications: {
        constraints: {
          UniqueItems: true
        },
        serializedName: "applications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataApplication"
            }
          }
        }
      },
      workspaces: {
        constraints: {
          UniqueItems: true
        },
        serializedName: "workspaces",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataWorkspace"
            }
          }
        }
      },
      resources: {
        constraints: {
          UniqueItems: true
        },
        serializedName: "resources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      },
      permissions: {
        constraints: {
          UniqueItems: true
        },
        serializedName: "permissions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataPermissions"
            }
          }
        }
      }
    }
  }
};

export const MetadataCategory: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataCategory",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      related: {
        serializedName: "related",
        type: {
          name: "Composite",
          className: "MetadataCategoryRelated"
        }
      }
    }
  }
};

export const MetadataCategoryRelated: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataCategoryRelated",
    modelProperties: {
      tables: {
        serializedName: "tables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      functions: {
        serializedName: "functions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      resourceTypes: {
        serializedName: "resourceTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      queries: {
        serializedName: "queries",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      solutions: {
        serializedName: "solutions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MetadataResourceType: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataResourceType",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      labels: {
        serializedName: "labels",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      related: {
        serializedName: "related",
        type: {
          name: "Composite",
          className: "MetadataResourceTypeRelated"
        }
      }
    }
  }
};

export const MetadataResourceTypeRelated: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataResourceTypeRelated",
    modelProperties: {
      tables: {
        serializedName: "tables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      functions: {
        serializedName: "functions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      categories: {
        serializedName: "categories",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      queries: {
        serializedName: "queries",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      workspaces: {
        serializedName: "workspaces",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      resources: {
        serializedName: "resources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MetadataSolution: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataSolution",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      related: {
        serializedName: "related",
        type: {
          name: "Composite",
          className: "MetadataSolutionRelated"
        }
      }
    }
  }
};

export const MetadataSolutionRelated: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataSolutionRelated",
    modelProperties: {
      tables: {
        serializedName: "tables",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      functions: {
        serializedName: "functions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      categories: {
        serializedName: "categories",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      queries: {
        serializedName: "queries",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      workspaces: {
        serializedName: "workspaces",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MetadataTable: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataTable",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      timespanColumn: {
        serializedName: "timespanColumn",
        type: {
          name: "String"
        }
      },
      labels: {
        serializedName: "labels",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      columns: {
        serializedName: "columns",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataTableColumnsItem"
            }
          }
        }
      },
      related: {
        serializedName: "related",
        type: {
          name: "Composite",
          className: "MetadataTableRelated"
        }
      }
    }
  }
};

export const MetadataTableColumnsItem: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataTableColumnsItem",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      isPreferredFacet: {
        serializedName: "isPreferredFacet",
        type: {
          name: "Boolean"
        }
      },
      source: {
        serializedName: "source",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const MetadataTableRelated: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataTableRelated",
    modelProperties: {
      categories: {
        serializedName: "categories",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      solutions: {
        serializedName: "solutions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      resourceTypes: {
        serializedName: "resourceTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      workspaces: {
        serializedName: "workspaces",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      functions: {
        serializedName: "functions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      queries: {
        serializedName: "queries",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MetadataFunction: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataFunction",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      body: {
        serializedName: "body",
        required: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      related: {
        serializedName: "related",
        type: {
          name: "Composite",
          className: "MetadataFunctionRelated"
        }
      }
    }
  }
};

export const MetadataFunctionRelated: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataFunctionRelated",
    modelProperties: {
      tables: {
        serializedName: "tables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      solutions: {
        serializedName: "solutions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      resourceTypes: {
        serializedName: "resourceTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      categories: {
        serializedName: "categories",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      workspaces: {
        serializedName: "workspaces",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MetadataQuery: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataQuery",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      body: {
        serializedName: "body",
        required: true,
        type: {
          name: "String"
        }
      },
      labels: {
        serializedName: "labels",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      related: {
        serializedName: "related",
        type: {
          name: "Composite",
          className: "MetadataQueryRelated"
        }
      }
    }
  }
};

export const MetadataQueryRelated: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataQueryRelated",
    modelProperties: {
      categories: {
        serializedName: "categories",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      solutions: {
        serializedName: "solutions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      resourceTypes: {
        serializedName: "resourceTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      tables: {
        serializedName: "tables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MetadataApplication: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataApplication",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      resourceId: {
        serializedName: "resourceId",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      region: {
        serializedName: "region",
        required: true,
        type: {
          name: "String"
        }
      },
      related: {
        serializedName: "related",
        type: {
          name: "Composite",
          className: "MetadataApplicationRelated"
        }
      }
    }
  }
};

export const MetadataApplicationRelated: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataApplicationRelated",
    modelProperties: {
      tables: {
        serializedName: "tables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      functions: {
        serializedName: "functions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MetadataWorkspace: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataWorkspace",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      resourceId: {
        serializedName: "resourceId",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      region: {
        serializedName: "region",
        required: true,
        type: {
          name: "String"
        }
      },
      related: {
        serializedName: "related",
        type: {
          name: "Composite",
          className: "MetadataWorkspaceRelated"
        }
      }
    }
  }
};

export const MetadataWorkspaceRelated: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataWorkspaceRelated",
    modelProperties: {
      tables: {
        serializedName: "tables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      solutions: {
        serializedName: "solutions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      resourceTypes: {
        serializedName: "resourceTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      functions: {
        serializedName: "functions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      resources: {
        serializedName: "resources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MetadataPermissions: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataPermissions",
    modelProperties: {
      workspaces: {
        serializedName: "workspaces",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataPermissionsWorkspacesItem"
            }
          }
        }
      },
      resources: {
        serializedName: "resources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataPermissionsResourcesItem"
            }
          }
        }
      },
      applications: {
        serializedName: "applications",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MetadataPermissionsApplicationsItem"
            }
          }
        }
      }
    }
  }
};

export const MetadataPermissionsWorkspacesItem: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataPermissionsWorkspacesItem",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        required: true,
        type: {
          name: "String"
        }
      },
      denyTables: {
        serializedName: "denyTables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MetadataPermissionsResourcesItem: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataPermissionsResourcesItem",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        required: true,
        type: {
          name: "String"
        }
      },
      denyTables: {
        serializedName: "denyTables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const MetadataPermissionsApplicationsItem: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MetadataPermissionsApplicationsItem",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BatchRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchRequest",
    modelProperties: {
      requests: {
        serializedName: "requests",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BatchQueryRequest"
            }
          }
        }
      }
    }
  }
};

export const BatchQueryRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchQueryRequest",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      headers: {
        serializedName: "headers",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      body: {
        serializedName: "body",
        type: {
          name: "Composite",
          className: "QueryBody"
        }
      },
      path: {
        defaultValue: "/query",
        isConstant: true,
        serializedName: "path",
        type: {
          name: "String"
        }
      },
      method: {
        defaultValue: "POST",
        isConstant: true,
        serializedName: "method",
        type: {
          name: "String"
        }
      },
      workspace: {
        serializedName: "workspace",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BatchResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchResponse",
    modelProperties: {
      responses: {
        serializedName: "responses",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BatchQueryResponse"
            }
          }
        }
      }
    }
  }
};

export const BatchQueryResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchQueryResponse",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      body: {
        serializedName: "body",
        type: {
          name: "Composite",
          className: "BatchQueryResults"
        }
      },
      headers: {
        serializedName: "headers",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const BatchQueryResults: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BatchQueryResults",
    modelProperties: {
      tables: {
        serializedName: "tables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Table"
            }
          }
        }
      },
      statistics: {
        serializedName: "statistics",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      render: {
        serializedName: "render",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorInfo"
        }
      }
    }
  }
};
