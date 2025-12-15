import { useState, useEffect, useMemo, useCallback } from 'react';
import type { JSX } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import pathsA from "../imports/svg-2kr7bspzf9";
import pathsB from "../imports/svg-uaoyunhbeu";
const svgPaths = { ...pathsA, ...pathsB };
import { usePollingGet, usePost } from '../../../src/hooks/api';
import { storageUtils } from '../../../src/utils/storage';
import Image from 'next/image';

const DUMMY_RESPONSE = {
  "status": "ok",
  "message": "Data successfully fetched",
  "data": [
    {
      "json": {
        "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
        "competitor_id": "37294341-4661-4ba8-8bb6-2b09b7d0d324",
        "created_at": "2025-12-11T04:55:25.806Z",
        "updated_at": "2025-12-11T04:55:25.806Z",
        "id": "a03e4155-75c5-4a80-9a12-40db80b21b73",
        "parent_data": {
          "id": "b00efb15-ed7e-40df-897f-d6112a41938f",
          "url": "sribu.com",
          "status": "finished",
          "payload": {
            "data": {
              "url": "sribu.com",
              "type": "all",
              "questions": [
                "What are the best freelance graphic designers for a small business?",
                "How can I hire a logo designer online?",
                "Where can I find affordable web design services for a startup?"
              ]
            }
          },
          "executor": null,
          "manifest": 40.3333333333333,
          "optimize": 79.5,
          "questions": [
            "What are the best freelance graphic designers for a small business?",
            "How can I hire a logo designer online?",
            "Where can I find affordable web design services for a startup?"
          ],
          "created_at": "2025-12-11T04:55:11.219266+00:00",
          "generative": 0,
          "updated_at": "2025-12-11T04:56:00.587297+00:00",
          "sub_process": [
            {
              "id": "508f7d1b-f81d-404d-aa34-6a52bf6c02a4",
              "type": "news_mentioned",
              "status": "finished",
              "metadata": {
                "total_mentions": 2,
                "news_mention_score": 20
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:12.248762+00:00",
              "updated_at": "2025-12-11T04:55:14.280981+00:00",
              "error_metadata": null
            },
            {
              "id": "0aaab383-f910-420f-85ca-6784ef14dc0c",
              "type": "backlink",
              "status": "finished",
              "metadata": {
                "backlink_score": 1,
                "total_backlinks": 243,
                "authoritative_backlinks": 3
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:11.783044+00:00",
              "updated_at": "2025-12-11T04:55:14.32194+00:00",
              "error_metadata": null
            },
            {
              "id": "650b7961-5035-42a3-bcc4-8c211c8e7dfa",
              "type": "wikidata",
              "status": "finished",
              "metadata": {
                "wikidata_score": {
                  "data": 100
                }
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:11.980037+00:00",
              "updated_at": "2025-12-11T04:55:14.980761+00:00",
              "error_metadata": null
            },
            {
              "id": "d9f053fb-46cb-45dc-9a65-e3999f2f83ec",
              "type": "schema",
              "status": "finished",
              "metadata": {
                "overallScore": 85
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:13.055832+00:00",
              "updated_at": "2025-12-11T04:55:19.834807+00:00",
              "error_metadata": null
            },
            {
              "id": "3ed9abdd-7315-49e5-855b-501306faa48f",
              "type": "ai_overview",
              "status": "finished",
              "metadata": {
                "total_hits": 2,
                "ai_overview_score": 0,
                "total_appearances": 0
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:17.664442+00:00",
              "updated_at": "2025-12-11T04:55:23.806362+00:00",
              "error_metadata": null
            },
            {
              "id": "fc53b820-5fe6-4b54-8edd-4435178b70f3",
              "type": "ai_cite_score",
              "status": "finished",
              "metadata": {
                "total_hits": 2,
                "per_iterasi": {
                  "1": {
                    "rank": null,
                    "hasMatch": false
                  },
                  "2": {
                    "rank": null,
                    "hasMatch": false
                  }
                },
                "ai_cite_score": 0,
                "total_appearances": 0
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:17.528441+00:00",
              "updated_at": "2025-12-11T04:55:39.573951+00:00",
              "error_metadata": null
            },
            {
              "id": "b34f9336-ec89-4cad-9a43-8a74560f4b44",
              "type": "ai_cite_ranking",
              "status": "finished",
              "metadata": {
                "per_iterasi": {
                  "1": {
                    "rank": null,
                    "hasMatch": false
                  },
                  "2": {
                    "rank": null,
                    "hasMatch": false
                  }
                },
                "total_mentions": 0,
                "ai_cite_score_rank1": 0,
                "total_rank1_mentions": 0
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:12.162326+00:00",
              "updated_at": "2025-12-11T04:55:45.365957+00:00",
              "error_metadata": null
            },
            {
              "id": "e0a5b41b-304e-413c-9821-30b3797aa4c4",
              "type": "cwv",
              "status": "finished",
              "metadata": {
                "url": "https://www.sribu.com/id",
                "seo_score": 100,
                "final_score": 74,
                "performance_score": 27,
                "accessibility_score": 92,
                "best_practices_score": 77
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:11.595061+00:00",
              "updated_at": "2025-12-11T04:56:00.309466+00:00",
              "error_metadata": null
            }
          ],
          "overall_score": 39.9444444444444
        },
        "competitor_data": {
          "id": "37294341-4661-4ba8-8bb6-2b09b7d0d324",
          "url": "projects.co.id",
          "status": "finished",
          "payload": {
            "data": {
              "url": "projects.co.id",
              "type": "all",
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "questions": [
                "What are the best freelance project platforms in Indonesia?",
                "How can I hire a web developer online for a small business?",
                "Where can I find a graphic designer for a startup logo?"
              ]
            }
          },
          "executor": null,
          "manifest": 33.6666666666667,
          "optimize": 39.5,
          "questions": [
            "What are the best freelance project platforms in Indonesia?",
            "How can I hire a web developer online for a small business?",
            "Where can I find a graphic designer for a startup logo?"
          ],
          "created_at": "2025-12-11T04:55:25.641095+00:00",
          "generative": 33.3333333333333,
          "updated_at": "2025-12-11T04:56:01.399154+00:00",
          "sub_process": [
            {
              "id": "14be11e4-5f4b-46fb-bbcb-23d734f741f3",
              "type": "ai_cite_ranking",
              "status": "finished",
              "metadata": {
                "per_iterasi": {
                  "1": {
                    "rank": 2,
                    "hasMatch": true
                  },
                  "2": {
                    "rank": null,
                    "hasMatch": false
                  }
                },
                "total_mentions": 1,
                "ai_cite_score_rank1": 0,
                "total_rank1_mentions": 0
              },
              "header_id": "37294341-4661-4ba8-8bb6-2b09b7d0d324",
              "created_at": "2025-12-11T04:55:26.732352+00:00",
              "updated_at": "2025-12-11T04:56:01.12104+00:00",
              "error_metadata": null
            },
            {
              "id": "76000954-c151-46f2-ad81-0a28aff885ad",
              "type": "news_mentioned",
              "status": "finished",
              "metadata": {
                "total_mentions": 0,
                "news_mention_score": 0
              },
              "header_id": "37294341-4661-4ba8-8bb6-2b09b7d0d324",
              "created_at": "2025-12-11T04:55:26.35012+00:00",
              "updated_at": "2025-12-11T04:55:27.262159+00:00",
              "error_metadata": null
            },
            {
              "id": "9e212c86-ff1c-4dc8-9f98-9f03c3a01a1f",
              "type": "backlink",
              "status": "finished",
              "metadata": {
                "backlink_score": 1,
                "total_backlinks": 742,
                "authoritative_backlinks": 7
              },
              "header_id": "37294341-4661-4ba8-8bb6-2b09b7d0d324",
              "created_at": "2025-12-11T04:55:26.235666+00:00",
              "updated_at": "2025-12-11T04:55:27.801232+00:00",
              "error_metadata": null
            },
            {
              "id": "7265b029-b06f-44f2-a1a7-faedbf66c66f",
              "type": "wikidata",
              "status": "finished",
              "metadata": {
                "wikidata_score": {
                  "data": 100
                }
              },
              "header_id": "37294341-4661-4ba8-8bb6-2b09b7d0d324",
              "created_at": "2025-12-11T04:55:26.485879+00:00",
              "updated_at": "2025-12-11T04:55:28.306648+00:00",
              "error_metadata": null
            },
            {
              "id": "e86e437c-a581-4cf3-84a1-70f16f75ef75",
              "type": "ai_overview",
              "status": "finished",
              "metadata": {
                "total_hits": 2,
                "ai_overview_score": 50,
                "total_appearances": 1
              },
              "header_id": "37294341-4661-4ba8-8bb6-2b09b7d0d324",
              "created_at": "2025-12-11T04:55:27.107495+00:00",
              "updated_at": "2025-12-11T04:55:37.652136+00:00",
              "error_metadata": null
            },
            {
              "id": "55b915ee-3fea-45ad-a101-bf40b6aa82c1",
              "type": "schema",
              "status": "finished",
              "metadata": {
                "overallScore": 0
              },
              "header_id": "37294341-4661-4ba8-8bb6-2b09b7d0d324",
              "created_at": "2025-12-11T04:55:26.138542+00:00",
              "updated_at": "2025-12-11T04:55:38.844103+00:00",
              "error_metadata": null
            },
            {
              "id": "e865cb38-af7c-4c82-b86c-f02e1d6a7aba",
              "type": "ai_cite_score",
              "status": "finished",
              "metadata": {
                "total_hits": 2,
                "per_iterasi": {
                  "1": {
                    "rank": 2,
                    "hasMatch": true
                  },
                  "2": {
                    "rank": null,
                    "hasMatch": false
                  }
                },
                "ai_cite_score": 50,
                "total_appearances": 1
              },
              "header_id": "37294341-4661-4ba8-8bb6-2b09b7d0d324",
              "created_at": "2025-12-11T04:55:26.618717+00:00",
              "updated_at": "2025-12-11T04:55:46.135282+00:00",
              "error_metadata": null
            },
            {
              "id": "50217c09-c81d-4a63-97ed-061cfdd4de16",
              "type": "cwv",
              "status": "finished",
              "metadata": {
                "url": "https://projects.co.id/",
                "seo_score": 83,
                "final_score": 79,
                "performance_score": 56,
                "accessibility_score": 83,
                "best_practices_score": 92
              },
              "header_id": "37294341-4661-4ba8-8bb6-2b09b7d0d324",
              "created_at": "2025-12-11T04:55:26.033725+00:00",
              "updated_at": "2025-12-11T04:55:55.06408+00:00",
              "error_metadata": null
            }
          ],
          "overall_score": 35.5
        }
      },
      "pairedItem": {
        "item": 0
      }
    },
    {
      "json": {
        "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
        "competitor_id": "c82bf08b-0d5c-4472-9256-af85716ceb70",
        "created_at": "2025-12-11T10:43:55.787Z",
        "updated_at": "2025-12-11T10:43:55.787Z",
        "id": "07ec1802-fff1-454e-bdf8-c5bebf2c5dea",
        "parent_data": {
          "id": "b00efb15-ed7e-40df-897f-d6112a41938f",
          "url": "sribu.com",
          "status": "finished",
          "payload": {
            "data": {
              "url": "sribu.com",
              "type": "all",
              "questions": [
                "What are the best freelance graphic designers for a small business?",
                "How can I hire a logo designer online?",
                "Where can I find affordable web design services for a startup?"
              ]
            }
          },
          "executor": null,
          "manifest": 40.3333333333333,
          "optimize": 79.5,
          "questions": [
            "What are the best freelance graphic designers for a small business?",
            "How can I hire a logo designer online?",
            "Where can I find affordable web design services for a startup?"
          ],
          "created_at": "2025-12-11T04:55:11.219266+00:00",
          "generative": 0,
          "updated_at": "2025-12-11T04:56:00.587297+00:00",
          "sub_process": [
            {
              "id": "508f7d1b-f81d-404d-aa34-6a52bf6c02a4",
              "type": "news_mentioned",
              "status": "finished",
              "metadata": {
                "total_mentions": 2,
                "news_mention_score": 20
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:12.248762+00:00",
              "updated_at": "2025-12-11T04:55:14.280981+00:00",
              "error_metadata": null
            },
            {
              "id": "0aaab383-f910-420f-85ca-6784ef14dc0c",
              "type": "backlink",
              "status": "finished",
              "metadata": {
                "backlink_score": 1,
                "total_backlinks": 243,
                "authoritative_backlinks": 3
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:11.783044+00:00",
              "updated_at": "2025-12-11T04:55:14.32194+00:00",
              "error_metadata": null
            },
            {
              "id": "650b7961-5035-42a3-bcc4-8c211c8e7dfa",
              "type": "wikidata",
              "status": "finished",
              "metadata": {
                "wikidata_score": {
                  "data": 100
                }
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:11.980037+00:00",
              "updated_at": "2025-12-11T04:55:14.980761+00:00",
              "error_metadata": null
            },
            {
              "id": "d9f053fb-46cb-45dc-9a65-e3999f2f83ec",
              "type": "schema",
              "status": "finished",
              "metadata": {
                "overallScore": 85
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:13.055832+00:00",
              "updated_at": "2025-12-11T04:55:19.834807+00:00",
              "error_metadata": null
            },
            {
              "id": "3ed9abdd-7315-49e5-855b-501306faa48f",
              "type": "ai_overview",
              "status": "finished",
              "metadata": {
                "total_hits": 2,
                "ai_overview_score": 0,
                "total_appearances": 0
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:17.664442+00:00",
              "updated_at": "2025-12-11T04:55:23.806362+00:00",
              "error_metadata": null
            },
            {
              "id": "fc53b820-5fe6-4b54-8edd-4435178b70f3",
              "type": "ai_cite_score",
              "status": "finished",
              "metadata": {
                "total_hits": 2,
                "per_iterasi": {
                  "1": {
                    "rank": null,
                    "hasMatch": false
                  },
                  "2": {
                    "rank": null,
                    "hasMatch": false
                  }
                },
                "ai_cite_score": 0,
                "total_appearances": 0
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:17.528441+00:00",
              "updated_at": "2025-12-11T04:55:39.573951+00:00",
              "error_metadata": null
            },
            {
              "id": "b34f9336-ec89-4cad-9a43-8a74560f4b44",
              "type": "ai_cite_ranking",
              "status": "finished",
              "metadata": {
                "per_iterasi": {
                  "1": {
                    "rank": null,
                    "hasMatch": false
                  },
                  "2": {
                    "rank": null,
                    "hasMatch": false
                  }
                },
                "total_mentions": 0,
                "ai_cite_score_rank1": 0,
                "total_rank1_mentions": 0
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:12.162326+00:00",
              "updated_at": "2025-12-11T04:55:45.365957+00:00",
              "error_metadata": null
            },
            {
              "id": "e0a5b41b-304e-413c-9821-30b3797aa4c4",
              "type": "cwv",
              "status": "finished",
              "metadata": {
                "url": "https://www.sribu.com/id",
                "seo_score": 100,
                "final_score": 74,
                "performance_score": 27,
                "accessibility_score": 92,
                "best_practices_score": 77
              },
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "created_at": "2025-12-11T04:55:11.595061+00:00",
              "updated_at": "2025-12-11T04:56:00.309466+00:00",
              "error_metadata": null
            }
          ],
          "overall_score": 39.9444444444444
        },
        "competitor_data": {
          "id": "c82bf08b-0d5c-4472-9256-af85716ceb70",
          "url": "upwork.com",
          "status": "finished",
          "payload": {
            "data": {
              "url": "upwork.com",
              "type": "all",
              "header_id": "b00efb15-ed7e-40df-897f-d6112a41938f",
              "questions": [
                "What are the best freelance platforms for hiring developers?",
                "How can I hire a graphic designer online for my startup?",
                "Where can I find affordable freelance writers for a blog?"
              ]
            }
          },
          "executor": null,
          "manifest": 40,
          "optimize": 77,
          "questions": [
            "What are the best freelance platforms for hiring developers?",
            "How can I hire a graphic designer online for my startup?",
            "Where can I find affordable freelance writers for a blog?"
          ],
          "created_at": "2025-12-11T10:43:55.624454+00:00",
          "generative": 83.3333333333333,
          "updated_at": "2025-12-11T10:45:14.968343+00:00",
          "sub_process": [
            {
              "id": "9436d05c-f553-46b7-9bb0-2eb354f0cbc2",
              "type": "news_mentioned",
              "status": "finished",
              "metadata": {
                "total_mentions": 2,
                "news_mention_score": 20
              },
              "header_id": "c82bf08b-0d5c-4472-9256-af85716ceb70",
              "created_at": "2025-12-11T10:43:56.712201+00:00",
              "updated_at": "2025-12-11T10:43:58.858639+00:00",
              "error_metadata": null
            },
            {
              "id": "36ef1901-a391-4053-b18d-bc769650f40e",
              "type": "backlink",
              "status": "finished",
              "metadata": {
                "backlink_score": 0,
                "total_backlinks": 4571,
                "authoritative_backlinks": 13
              },
              "header_id": "c82bf08b-0d5c-4472-9256-af85716ceb70",
              "created_at": "2025-12-11T10:43:56.23685+00:00",
              "updated_at": "2025-12-11T10:44:00.420241+00:00",
              "error_metadata": null
            },
            {
              "id": "ee6e3766-2c84-4ac7-829a-fc0a5886bed8",
              "type": "ai_cite_ranking",
              "status": "finished",
              "metadata": {
                "per_iterasi": {
                  "1": {
                    "rank": 1,
                    "hasMatch": true
                  },
                  "2": {
                    "rank": 2,
                    "hasMatch": true
                  }
                },
                "total_mentions": 2,
                "ai_cite_score_rank1": 50,
                "total_rank1_mentions": 1
              },
              "header_id": "c82bf08b-0d5c-4472-9256-af85716ceb70",
              "created_at": "2025-12-11T10:43:56.980847+00:00",
              "updated_at": "2025-12-11T10:44:37.854725+00:00",
              "error_metadata": null
            },
            {
              "id": "9203d3fa-9ee3-479b-bd9d-00802ef043ec",
              "type": "wikidata",
              "status": "finished",
              "metadata": {
                "wikidata_score": {
                  "data": 100
                }
              },
              "header_id": "c82bf08b-0d5c-4472-9256-af85716ceb70",
              "created_at": "2025-12-11T10:43:56.487254+00:00",
              "updated_at": "2025-12-11T10:43:59.472568+00:00",
              "error_metadata": null
            },
            {
              "id": "c9285e6d-55c1-4d02-ac72-c57f29abe71d",
              "type": "ai_overview",
              "status": "finished",
              "metadata": {
                "total_hits": 2,
                "ai_overview_score": 100,
                "total_appearances": 2
              },
              "header_id": "c82bf08b-0d5c-4472-9256-af85716ceb70",
              "created_at": "2025-12-11T10:43:56.688911+00:00",
              "updated_at": "2025-12-11T10:44:04.329767+00:00",
              "error_metadata": null
            },
            {
              "id": "89f66396-6d75-4c75-8c28-2c4b82635324",
              "type": "schema",
              "status": "finished",
              "metadata": {
                "overallScore": 0,
                "error_metadata": {
                  "id": "89f66396-6d75-4c75-8c28-2c4b82635324",
                  "type": "schema",
                  "error": {
                    "code": "ERR_BAD_REQUEST",
                    "name": "AxiosError",
                    "stack": "AxiosError: Request failed with status code 400\n    at settle (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/axios@1.12.0/node_modules/axios/lib/core/settle.js:19:12)\n    at RedirectableRequest.handleResponse (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/axios@1.12.0/node_modules/axios/lib/adapters/http.js:565:9)\n    at RedirectableRequest.emit (node:events:531:35)\n    at RedirectableRequest._processResponse (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/follow-redirects@1.15.11/node_modules/follow-redirects/index.js:409:10)\n    at ClientRequest.RedirectableRequest._onNativeResponse (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/follow-redirects@1.15.11/node_modules/follow-redirects/index.js:102:12)\n    at Object.onceWrapper (node:events:634:26)\n    at ClientRequest.emit (node:events:519:28)\n    at HTTPParser.parserOnIncomingClient [as onIncoming] (node:_http_client:716:27)\n    at HTTPParser.parserOnHeadersComplete (node:_http_common:117:17)\n    at TLSSocket.socketOnData (node:_http_client:558:22)\n    at Axios.request (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/axios@1.12.0/node_modules/axios/lib/core/Axios.js:45:41)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at invokeAxios (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/n8n-core@file+packages+core_@opentelemetry+api@1.9.0_@opentelemetry+sdk-trace-base@1.30_08b575bec2313d5d8a4cc75358971443/node_modules/n8n-core/src/execution-engine/node-execution-context/utils/request-helper-functions.ts:313:10)\n    at proxyRequestToAxios (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/n8n-core@file+packages+core_@opentelemetry+api@1.9.0_@opentelemetry+sdk-trace-base@1.30_08b575bec2313d5d8a4cc75358971443/node_modules/n8n-core/src/execution-engine/node-execution-context/utils/request-helper-functions.ts:695:20)\n    at Object.request (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/n8n-core@file+packages+core_@opentelemetry+api@1.9.0_@opentelemetry+sdk-trace-base@1.30_08b575bec2313d5d8a4cc75358971443/node_modules/n8n-core/src/execution-engine/node-execution-context/utils/request-helper-functions.ts:1749:4)",
                    "status": 400,
                    "message": "400 - \"{\\\"error\\\":\\\"Failed to fetch URL\\\",\\\"details\\\":\\\"HTTP error! status: 403 Forbidden\\\"}\""
                  },
                  "status": "executing",
                  "details": "HTTP error! status: 403 Forbidden",
                  "metadata": null,
                  "header_id": "c82bf08b-0d5c-4472-9256-af85716ceb70",
                  "created_at": "2025-12-11T10:43:56.589Z",
                  "updated_at": "2025-12-11T10:43:56.589Z",
                  "error_metadata": null
                }
              },
              "header_id": "c82bf08b-0d5c-4472-9256-af85716ceb70",
              "created_at": "2025-12-11T10:43:56.589757+00:00",
              "updated_at": "2025-12-11T10:44:09.964349+00:00",
              "error_metadata": {
                "id": "89f66396-6d75-4c75-8c28-2c4b82635324",
                "type": "schema",
                "error": {
                  "code": "ERR_BAD_REQUEST",
                  "name": "AxiosError",
                  "stack": "AxiosError: Request failed with status code 400\n    at settle (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/axios@1.12.0/node_modules/axios/lib/core/settle.js:19:12)\n    at RedirectableRequest.handleResponse (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/axios@1.12.0/node_modules/axios/lib/adapters/http.js:565:9)\n    at RedirectableRequest.emit (node:events:531:35)\n    at RedirectableRequest._processResponse (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/follow-redirects@1.15.11/node_modules/follow-redirects/index.js:409:10)\n    at ClientRequest.RedirectableRequest._onNativeResponse (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/follow-redirects@1.15.11/node_modules/follow-redirects/index.js:102:12)\n    at Object.onceWrapper (node:events:634:26)\n    at ClientRequest.emit (node:events:519:28)\n    at HTTPParser.parserOnIncomingClient [as onIncoming] (node:_http_client:716:27)\n    at HTTPParser.parserOnHeadersComplete (node:_http_common:117:17)\n    at TLSSocket.socketOnData (node:_http_client:558:22)\n    at Axios.request (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/axios@1.12.0/node_modules/axios/lib/core/Axios.js:45:41)\n    at processTicksAndRejections (node:internal/process/task_queues:105:5)\n    at invokeAxios (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/n8n-core@file+packages+core_@opentelemetry+api@1.9.0_@opentelemetry+sdk-trace-base@1.30_08b575bec2313d5d8a4cc75358971443/node_modules/n8n-core/src/execution-engine/node-execution-context/utils/request-helper-functions.ts:313:10)\n    at proxyRequestToAxios (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/n8n-core@file+packages+core_@opentelemetry+api@1.9.0_@opentelemetry+sdk-trace-base@1.30_08b575bec2313d5d8a4cc75358971443/node_modules/n8n-core/src/execution-engine/node-execution-context/utils/request-helper-functions.ts:695:20)\n    at Object.request (/usr/local/lib/node_modules/n8n/node_modules/.pnpm/n8n-core@file+packages+core_@opentelemetry+api@1.9.0_@opentelemetry+sdk-trace-base@1.30_08b575bec2313d5d8a4cc75358971443/node_modules/n8n-core/src/execution-engine/node-execution-context/utils/request-helper-functions.ts:1749:4)",
                  "status": 400,
                  "message": "400 - \"{\\\"error\\\":\\\"Failed to fetch URL\\\",\\\"details\\\":\\\"HTTP error! status: 403 Forbidden\\\"}\""
                },
                "status": "executing",
                "details": "HTTP error! status: 403 Forbidden",
                "metadata": null,
                "header_id": "c82bf08b-0d5c-4472-9256-af85716ceb70",
                "created_at": "2025-12-11T10:43:56.589Z",
                "updated_at": "2025-12-11T10:43:56.589Z",
                "error_metadata": null
              }
            },
            {
              "id": "56bbf0a8-f282-4fe0-803a-1666aec63ee8",
              "type": "ai_cite_score",
              "status": "finished",
              "metadata": {
                "total_hits": 2,
                "per_iterasi": {
                  "1": {
                    "rank": 1,
                    "hasMatch": true
                  },
                  "2": {
                    "rank": 2,
                    "hasMatch": true
                  }
                },
                "ai_cite_score": 100,
                "total_appearances": 2
              },
              "header_id": "c82bf08b-0d5c-4472-9256-af85716ceb70",
              "created_at": "2025-12-11T10:43:57.8596+00:00",
              "updated_at": "2025-12-11T10:44:21.790237+00:00",
              "error_metadata": null
            },
            {
              "id": "ad7b5554-47a4-40aa-90fd-9beb3c4ea06f",
              "type": "cwv",
              "status": "finished",
              "metadata": {
                "url": "https://www.upwork.com/",
                "seo_score": 100,
                "final_score": 77,
                "performance_score": 46,
                "accessibility_score": 85,
                "best_practices_score": 77
              },
              "header_id": "c82bf08b-0d5c-4472-9256-af85716ceb70",
              "created_at": "2025-12-11T10:43:56.053742+00:00",
              "updated_at": "2025-12-11T10:45:13.580602+00:00",
              "error_metadata": null
            }
          ],
          "overall_score": 66.7777777777778
        }
      },
      "pairedItem": {
        "item": 0
      }
    }
  ]
};

interface Competitor {
  domain: string;
  score: number;
  opt: number;
  man: number;
  gen: number;
  cwvScore: number;
  schemaScore: number;
  backlinkScore?: number;
  newsMentionScore?: number;
  wikidataScore?: number;
  aiCiteScore?: number;
  aiOverviewScore?: number;
  aiCiteRankingScore?: number;
  addedAt: Date;
}

interface BenchmarkComparisonProps {
  userDomain: string;
  userScore: number;
  userScores: { opt: number; man: number; gen: number; avg: number };
}

export function BenchmarkComparison({ userDomain, userScore, userScores }: BenchmarkComparisonProps) {
  const [competitorInput, setCompetitorInput] = useState('');
  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const [expandedCompetitors, setExpandedCompetitors] = useState<Set<string>>(new Set());
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [submitMessage, setSubmitMessage] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  const avoData = typeof window !== 'undefined' ? storageUtils.getAvoData() : null;
  const analysisId = avoData?.id ?? null;

  const shouldStopPollingComparisons = useCallback((d: any) => {
    try {
      const payload = d?.data ?? d;
      if (!Array.isArray(payload)) return false;
      if (payload.length < 1) return true;
      const isEmptyJsonWithZeroPair = (item: any) => {
        const j = item?.json ?? item;
        const isEmptyObj = j && typeof j === 'object' && !Array.isArray(j) && Object.keys(j).length === 0;
        const p = item?.pairedItem;
        let hasZeroPair = false;
        if (Array.isArray(p)) {
          hasZeroPair = p.some((it) => Number(it?.item) === 0 && Number(it?.input) === 0);
        } else if (p && typeof p === 'object') {
          hasZeroPair = Number(p?.item) === 0 && (p?.input === undefined || Number(p?.input) === 0);
        }
        return Boolean(isEmptyObj && hasZeroPair);
      };
      if (payload.length === 1 && isEmptyJsonWithZeroPair(payload[0])) return true;
      const allEmptyPattern = payload.every((it: any) => isEmptyJsonWithZeroPair(it));
      if (allEmptyPattern) return true;
      const allFinished = payload.every((item: any) => {
        const j = item?.json ?? item;
        const ps = j?.parent_data?.status;
        const cs = j?.competitor_data?.status;
        return ps === 'finished' && cs === 'finished';
      });
      return allFinished;
    } catch {
      return false;
    }
  }, []);

  const { data: comparisonsData, isLoading: isComparisonsLoading, error: comparisonsError } = usePollingGet<any>(
    analysisId ? `/getlist-comparisons?id=${analysisId}&rk=${refreshKey}` : null,
    { interval: 2000, shouldStopPolling: shouldStopPollingComparisons, initialLoading: true }
  );

  const { trigger: submitCompetitor } = usePost<any>('/process-N8N-AVQ');

  const [apiUserDomain, setApiUserDomain] = useState<string | null>(null);
  const [apiUserScores, setApiUserScores] = useState<{ opt: number; man: number; gen: number; avg: number } | null>(null);
  const [apiUserDetail, setApiUserDetail] = useState<{ cwv?: number; schema?: number; backlink?: number; newsMention?: number; wikidata?: number; aiCite?: number; aiOverview?: number; aiCiteRanking?: number } | null>(null);

  useEffect(() => {
    const payload = comparisonsData?.data ?? (Array.isArray(comparisonsData) ? comparisonsData : null);
    // const payload = DUMMY_RESPONSE?.data

    if (!Array.isArray(payload) || payload.length < 1) return;
    const first = payload[0];
    const j0 = first?.json ?? first;
    const parent = j0?.parent_data ?? null;
    if (parent) {
      const avg = Number(parent?.overall_score) || 0;
      const opt = Number(parent?.optimize) || 0;
      const man = Number(parent?.manifest) || 0;
      const gen = Number(parent?.generative) || 0;
      setApiUserDomain(parent?.url ?? null);
      setApiUserScores({ opt: Math.round(opt), man: Math.round(man), gen: Math.round(gen), avg: Math.round(avg) });
      const subs = Array.isArray(parent?.sub_process) ? parent.sub_process : [];
      const getSubScore = (type: string, key: string): number | undefined => {
        const p = subs.find((s: any) => s?.type === type);
        if (!p || typeof p.metadata !== 'object' || p.metadata === null) return undefined;
        if (!(key in p.metadata)) return undefined;
        const val = (p.metadata as Record<string, any>)[key];
        const n = typeof val === 'object' && val !== null && 'data' in val ? Number((val as any).data) : Number(val);
        return Number.isFinite(n) ? Math.round(n) : undefined;
      };
      setApiUserDetail({
        cwv: getSubScore('cwv', 'final_score'),
        schema: getSubScore('schema', 'overallScore'),
        backlink: getSubScore('backlink', 'backlink_score'),
        newsMention: getSubScore('news_mentioned', 'news_mention_score'),
        wikidata: getSubScore('wikidata', 'wikidata_score'),
        aiCite: getSubScore('ai_cite_score', 'ai_cite_score'),
        aiOverview: getSubScore('ai_overview', 'ai_overview_score'),
        aiCiteRanking: getSubScore('ai_cite_ranking', 'ai_cite_score_rank1'),
      });
    }

    const filtered = payload.filter((item: any) => {
      const j = item?.json ?? item;
      const hid = j?.header_id;
      const cid = j?.competitor_id;
      return typeof hid === 'string' && hid.length > 0 && typeof cid === 'string' && cid.length > 0;
    });
    const mapped: Competitor[] = filtered.map((item: any) => {
      const j = item?.json ?? item;
      const comp = j?.competitor_data ?? {};
      const subs = Array.isArray(comp?.sub_process) ? comp.sub_process : [];
      const getSubScore = (type: string, key: string): number | undefined => {
        const p = subs.find((s: any) => s?.type === type);
        if (!p || typeof p.metadata !== 'object' || p.metadata === null) return undefined;
        if (!(key in p.metadata)) return undefined;
        const val = (p.metadata as Record<string, any>)[key];
        const n = typeof val === 'object' && val !== null && 'data' in val ? Number((val as any).data) : Number(val);
        return Number.isFinite(n) ? Math.round(n) : undefined;
      };
      const cwv = getSubScore('cwv', 'final_score');
      const schema = getSubScore('schema', 'overallScore');
      const backlink = getSubScore('backlink', 'backlink_score');
      const newsMention = getSubScore('news_mentioned', 'news_mention_score');
      const wikidata = getSubScore('wikidata', 'wikidata_score');
      const aiCite = getSubScore('ai_cite_score', 'ai_cite_score');
      const aiOverview = getSubScore('ai_overview', 'ai_overview_score');
      const aiCiteRanking = getSubScore('ai_cite_ranking', 'ai_cite_score_rank1');
      const overall = Number(comp?.overall_score);
      return {
        domain: comp?.url ?? 'competitor',
        score: Number.isFinite(overall) ? Math.round(overall) : Math.round(Number(comp?.optimize ?? 0)),
        opt: Math.round(Number(comp?.optimize ?? 0)),
        man: Math.round(Number(comp?.manifest ?? 0)),
        gen: Math.round(Number(comp?.generative ?? 0)),
        cwvScore: cwv ?? 0,
        schemaScore: schema ?? 0,
        backlinkScore: backlink,
        newsMentionScore: newsMention,
        wikidataScore: wikidata,
        aiCiteScore: aiCite,
        aiOverviewScore: aiOverview,
        aiCiteRankingScore: aiCiteRanking,
        addedAt: new Date(comp?.updated_at ?? comp?.created_at ?? new Date().toISOString()),
      };
    });
    setCompetitors(mapped);
    if (mapped.length > 0) setExpandedCompetitors(new Set([mapped[0].domain]));
  }, [comparisonsData]);

  const displayUserDomain = apiUserDomain ?? userDomain;
  const displayUserScores = apiUserScores ?? userScores;
  const displayUserAvg = (displayUserScores?.avg ?? userScore ?? 0);

  const validateDomain = (value: string) => {
    const trimmedDomain = value.trim();
    
    if (!trimmedDomain) {
      setError(true);
      setErrorMessage('Please enter competitor domain');
      return false;
    }
    
    const domainPattern = /\.[a-z]{2,}$/i;
    if (!domainPattern.test(trimmedDomain)) {
      setError(true);
      setErrorMessage('Please include a valid domain extension (e.g., .com, .net, .id)');
      return false;
    }
    
    const normalizedDomain = trimmedDomain.toLowerCase();
    if (competitors.some(c => c.domain === normalizedDomain)) {
      setError(true);
      setErrorMessage('This competitor has already been added');
      return false;
    }
    
    setError(false);
    setErrorMessage('');
    return true;
  };

  const handleAddCompetitor = async () => {
    if (!validateDomain(competitorInput)) {
      setTimeout(() => {
        setError(false);
        setErrorMessage('');
      }, 3000);
      return;
    }
    if (!analysisId) {
      setError(true);
      setErrorMessage('No Analysis ID found in storage');
      setTimeout(() => {
        setError(false);
        setErrorMessage('');
      }, 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(null);
    setSubmitMessage('');
    try {
      const result = await submitCompetitor({
        data: {
          url: competitorInput.trim().toLowerCase(),
          type: 'all',
          header_id: analysisId,
        },
      });
      setSubmitSuccess(true);
      setSubmitMessage('Competitor submitted successfully');
      setCompetitorInput('');
      setError(false);
      setErrorMessage('');
      setRefreshKey((k) => k + 1);
    } catch (err: any) {
      setSubmitSuccess(false);
      setSubmitMessage(err?.message || 'Failed to submit competitor');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitSuccess(null);
        setSubmitMessage('');
      }, 3000);
    }
  };

  const handleRemoveCompetitor = (domain: string) => {
    setCompetitors(competitors.filter(c => c.domain !== domain));
    const newExpanded = new Set(expandedCompetitors);
    newExpanded.delete(domain);
    setExpandedCompetitors(newExpanded);
  };

  const toggleCompetitor = (domain: string) => {
    const newExpanded = new Set(expandedCompetitors);
    if (newExpanded.has(domain)) {
      newExpanded.delete(domain);
    } else {
      newExpanded.add(domain);
    }
    setExpandedCompetitors(newExpanded);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddCompetitor();
    }
  };

  const getTimeSince = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return `${seconds} secs ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} min ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;
    const days = Math.floor(hours / 24);
    return `${days} days ago`;
  };

  const OMGScoreSection = ({ 
    label, 
    icon, 
    score, 
    barColor, 
    details,
  }: { 
    label: string; 
    icon: JSX.Element; 
    score: number; 
    barColor: string; 
    details: Array<{ label: string; value?: number }>;
  }) => (
    <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0">
            {icon}
            <p className=" font-semibold leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.6px] uppercase whitespace-pre">{label}</p>
          </div>
          <div className="content-stretch flex font-satoshi font-bold items-end leading-[normal] not-italic relative shrink-0 text-nowrap whitespace-pre">
            <p className="relative shrink-0 text-[20px] text-white mb-[-2px] mr-[1px]">{score}</p>
            <p className="relative shrink-0 text-[#919eab] text-[14px]">/100</p>
          </div>
        </div>
        <div className="bg-neutral-600 h-[6px] relative rounded-[2.68435e+07px] shrink-0 w-full">
          <div className={`h-[6px] rounded-[2.68435e+07px] shrink-0`} style={{ width: `${score}%`, backgroundColor: barColor }} />
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[6px] items-end justify-center relative shrink-0 w-full pl-5">
        {details.map((d, i) => (
          <div key={`${label}-detail-${i}`} className="content-stretch flex  font-normal items-center justify-between leading-[normal] relative shrink-0 text-nowrap w-full whitespace-pre">
            <p className="relative shrink-0 text-[#a7a7a7] text-[14px]">{d.label}</p>
            <p className="relative shrink-0 text-[#cfd1d4] text-[16px]">{typeof d.value === 'number' && Number.isFinite(d.value) ? Math.round(d.value) : 0}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between p-[20px] relative w-full">
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
              <div className="content-stretch flex gap-[8px] h-[16px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[20px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path d={svgPaths.p23fa6270} fill="white" />
                      <path d={svgPaths.p2c006e00} fill="white" />
                    </g>
                  </svg>
                </div>
                <p className=" font-semibold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">
                  Benchmark Comparison
                </p>
              </div>
              <p className=" font-normal leading-[normal] relative shrink-0 text-[#939393] text-[14px] text-nowrap whitespace-pre">
                See how your score against the other brands
              </p>
            </div>
            
            <div className="content-stretch flex flex-col gap-[10px] items-end justify-center relative shrink-0">
              <p className=" font-normal leading-[normal] relative shrink-0 text-[#a3a9b7] text-[12px] text-nowrap whitespace-pre">
                Your brand
              </p>
              <div className="content-stretch flex h-[16px] items-start relative shrink-0">
                <p className=" font-normal leading-[normal] relative shrink-0 text-[#cfd1d4] text-[16px] text-nowrap whitespace-pre">
                  {displayUserDomain}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-[rgba(22,36,62,0.5)] relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col items-center px-[20px] py-[24px] relative w-full gap-[16px]">
            <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
              <div className={`basis-0 bg-[#0b1525] grow h-[58px] min-h-px min-w-px relative rounded-[10px] shrink-0 transition-all duration-300 ${
                error ? 'ring-2 ring-red-500/50' : (isFocused || competitorInput ? 'ring-2 ring-[#C6F558]/50' : '')
              }`}>
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex h-[58px] items-center p-[16px] relative w-full">
                    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                      <div className="relative shrink-0 size-[20px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g clipPath="url(#clip0_bench_input)">
                            <path d={svgPaths.p14d24500} stroke={error ? "#EF4444" : (competitorInput || isFocused ? "#C6F558" : "#CFD1D4")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d={svgPaths.p17212180} stroke={error ? "#EF4444" : (competitorInput || isFocused ? "#C6F558" : "#CFD1D4")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            <path d="M1.66667 10H18.3333" stroke={error ? "#EF4444" : (competitorInput || isFocused ? "#C6F558" : "#CFD1D4")} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          </g>
                          <defs>
                            <clipPath id="clip0_bench_input">
                              <rect fill="white" height="20" width="20" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <input
                        type="text"
                        value={competitorInput}
                        onChange={(e) => {
                          setCompetitorInput(e.target.value);
                          if (error) {
                            setError(false);
                            setErrorMessage('');
                          }
                        }}
                        onKeyPress={handleKeyPress}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder='type "competitor.com"'
                        className={`font-['Manrope:Medium',sans-serif] font-medium leading-[normal] bg-transparent outline-none text-[16px] text-nowrap whitespace-pre w-full ${
                          error ? 'text-red-500 placeholder-red-500/50' : (competitorInput ? 'text-white' : 'text-[#6a6a6b] placeholder-[#6a6a6b]')
                        }`}
                      />
                    </div>
                  </div>
                </div>
                <div aria-hidden="true" className={`absolute border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] transition-all duration-300 ${
                  error
                    ? 'border-red-500/50 shadow-[0px_4px_6px_-4px_rgba(239,68,68,0.3)]'
                    : (competitorInput || isFocused 
                      ? 'border-[rgba(198,245,88,0.5)] shadow-[0px_4px_6px_-4px_rgba(198,245,88,0.3)]' 
                      : 'border-[rgba(198,245,88,0.5)]')
                }`} />
              </div>

              <button
                onClick={handleAddCompetitor}
                disabled={!competitorInput.trim() || isSubmitting}
                className={`bg-[rgba(0,194,184,0.1)] content-stretch flex items-center justify-center px-[15px] py-[9px] relative rounded-[10px] self-stretch shrink-0 transition-all duration-300 ${
                  competitorInput.trim() && !isSubmitting ? 'hover:bg-[rgba(0,194,184,0.15)] cursor-pointer' : 'opacity-50 cursor-not-allowed'
                }`}
              >
                <div aria-hidden="true" className="absolute border border-[#006964] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <p className=" font-semibold leading-[normal] relative shrink-0 text-[#00c2b8] text-[16px] text-center text-nowrap whitespace-pre">
                  {isSubmitting ? 'Submitting...' : 'Add Competitor'}
                </p>
              </button>
            </div>

            <AnimatePresence>
              {error && errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <div className="bg-red-500/10 border border-red-500/30 rounded-[8px] px-[16px] py-[12px]">
                    <p className=" text-[14px] text-red-500">
                      {errorMessage}
                    </p>
                  </div>
                </motion.div>
              )}
              {isSubmitting && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <div className="bg-[rgba(0,194,184,0.1)] border border-[#006964]/50 rounded-[8px] px-[16px] py-[12px]">
                    <p className=" text-[14px] text-[#00c2b8]">Submitting competitor...</p>
                  </div>
                </motion.div>
              )}
              {submitSuccess === true && submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <div className="bg-[#00c2b8]/10 border border-[#00c2b8]/50 rounded-[8px] px-[16px] py-[12px]">
                    <p className=" text-[14px] text-[#00c2b8]">{submitMessage}</p>
                  </div>
                </motion.div>
              )}
              {submitSuccess === false && submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <div className="bg-red-500/10 border border-red-500/30 rounded-[8px] px-[16px] py-[12px]">
                    <p className=" text-[14px] text-red-500">{submitMessage}</p>
                  </div>
                </motion.div>
              )}
              {isComparisonsLoading && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <div className="bg-[rgba(0,194,184,0.1)] border border-[#006964]/50 rounded-[8px] px-[16px] py-[12px]">
                    <p className=" text-[14px] text-[#00c2b8]">Loading comparisons...</p>
                  </div>
                </motion.div>
              )}
              {comparisonsError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full"
                >
                  <div className="bg-red-500/10 border border-red-500/30 rounded-[8px] px-[16px] py-[12px]">
                    <p className=" text-[14px] text-red-500">Failed to load comparisons</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Competitor List */}
      <AnimatePresence>
        {competitors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full flex flex-col"
          >
            {/* {console.log(competitors)} */}
            {competitors.map((competitor, index) => {
              const isExpanded = expandedCompetitors.has(competitor.domain);
              const scoreDelta = displayUserAvg - competitor.score;
              
              return (
                <div key={competitor.domain} className="w-full">
                  {/* Competitor Header */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[rgba(22,36,62,0.5)] h-[76px] relative shrink-0 w-full"
                  >
                    <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex h-[76px] items-center justify-between px-[32px] py-[24px] relative w-full">
                        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                          <button
                            onClick={() => toggleCompetitor(competitor.domain)}
                            className="flex items-center justify-center relative shrink-0 cursor-pointer"
                          >
                            <div className={`flex-none transition-transform duration-300 ${isExpanded ? '' : 'rotate-180'}`}>
                              <div className="bg-[rgba(0,194,184,0.05)] content-stretch flex items-center justify-center p-[8.105px] relative rounded-[7.368px] size-[28px]">
                                <div aria-hidden="true" className="absolute border-[0.737px] border-solid border-[#00C2B8] inset-0 pointer-events-none rounded-[7.368px]" />
                                <div className="relative shrink-0 size-[11.789px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                                    <g>
                                      <path d={svgPaths.p2ef97980} fill="#00C2B8" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </button>
                          <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                            <p className="font-semibold leading-[normal] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">
                              {competitor.domain}
                            </p>
                            <div className="relative shrink-0 size-[4px]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
                                <circle cx="2" cy="2" fill="#6D6D6D" r="2" />
                              </svg>
                            </div>
                            <p className=" font-normal leading-[normal] relative shrink-0 text-[#6a6a6b] text-[14px] text-nowrap whitespace-pre">
                              {getTimeSince(competitor.addedAt)}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveCompetitor(competitor.domain);
                          }}
                          className="relative shrink-0 size-[28px] hover:opacity-70 transition-opacity cursor-pointer"
                        >
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                            <g>
                              <path d={svgPaths.p8018100} fill="white" />
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Expanded Comparison Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[rgba(22,36,62,0.5)] relative shrink-0 w-full overflow-hidden"
                      >
                        <div className="flex flex-col items-center justify-center size-full">
                          <div className="content-stretch flex flex-col items-center justify-center pb-[32px] pt-[24px] px-[32px] relative w-full">
                            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full max-w-[871px]">
                              
                              {/* Score Comparison */}
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-row items-center size-full">
                                  <div className="content-stretch flex items-center justify-between px-[64px] py-0 relative w-full">
                                    {/* Your Score Circle */}
                                    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0">
                                      <div className="relative shrink-0 size-[150px]">
                                        <div className="absolute left-1/2 size-[114px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                                          <div className="absolute inset-[-49.12%_-52.63%_-56.14%_-52.63%]">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 234 234">
                                              <g filter={`url(#filter0_dd_user_${index})`}>
                                                <circle cx="117" cy="113" fill="#16243E" fillOpacity="0.6" r="57" shapeRendering="crispEdges" />
                                                <circle cx="117" cy="113" r="56.5" shapeRendering="crispEdges" stroke="#FCFCFC" strokeOpacity="0.06" />
                                              </g>
                                              <defs>
                                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="234" id={`filter0_dd_user_${index}`} width="234" x="0" y="0">
                                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                  <feOffset dy="4" />
                                                  <feGaussianBlur stdDeviation="30" />
                                                  <feComposite in2="hardAlpha" operator="out" />
                                                  <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.945098 0 0 0 0 0.956863 0 0 0 0.15 0" />
                                                  <feBlend in2="BackgroundImageFix" mode="normal" result={`effect1_dropShadow_user_${index}`} />
                                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                  <feOffset dy="10" />
                                                  <feGaussianBlur stdDeviation="12.5" />
                                                  <feComposite in2="hardAlpha" operator="out" />
                                                  <feColorMatrix type="matrix" values="0 0 0 0 0.0149001 0 0 0 0 0.0421976 0 0 0 0 0.0907264 0 0 0 0.4 0" />
                                                  <feBlend in2={`effect1_dropShadow_user_${index}`} mode="normal" result={`effect2_dropShadow_user_${index}`} />
                                                  <feBlend in="SourceGraphic" in2={`effect2_dropShadow_user_${index}`} mode="normal" result="shape" />
                                                </filter>
                                              </defs>
                                            </svg>
                                          </div>
                                        </div>
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
                                          <g>
                                            <g>
                                              <mask fill="white" id={`path-1-inside-1-user-${index}`}>
                                                <path d={svgPaths.p3e18f000} />
                                              </mask>
                                              <path d={svgPaths.p3e18f000} fill="#16243E" fillOpacity="0.9" mask={`url(#path-1-inside-1-user-${index})`} stroke="#C6F558" strokeOpacity="0.2" />
                                            </g>
                                            <g>
                                              <path d={svgPaths.pf8e7100} fill={`url(#paint0_linear_user_${index})`} />
                                              <path d={svgPaths.p19c489c0} stroke="#C6F558" strokeOpacity="0.2" strokeWidth="0.5" />
                                            </g>
                                          </g>
                                          <defs>
                                            <linearGradient gradientUnits="userSpaceOnUse" id={`paint0_linear_user_${index}`} x1="75" x2="75" y1="0" y2="150">
                                              <stop stopColor="#00C2B8" />
                                              <stop offset="1" stopColor="#158F88" />
                                            </linearGradient>
                                          </defs>
                                        </svg>
                                        <div className="absolute content-stretch flex flex-col gap-[6px] items-center justify-center left-[calc(50%-0.5px)] text-nowrap top-[calc(50%+5.5px)] translate-x-[-50%] translate-y-[-50%] whitespace-pre">
                                          <p className="font-satoshi font-bold leading-[normal] not-italic relative shrink-0 text-[#fef0cc] text-[48px] tracking-[-0.96px]">{displayUserAvg}</p>
                                          <p className=" font-normal leading-[26px] relative shrink-0 text-[#cfd1d4] text-[14px] tracking-[0.07px]">Overall</p>
                                        </div>
                                      </div>
                                      <div className="content-stretch flex h-[16px] items-start relative shrink-0">
                                        <p className=" font-normal leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Your score</p>
                                      </div>
                                    </div>

                                    {/* Center Text */}
                                    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0">
                                      <p className="font-sansation leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Score Comparison</p>
                                      <div className="content-stretch flex  font-semibold gap-[6px] items-center leading-[normal] relative shrink-0 text-nowrap whitespace-pre">
                                        <p className="relative shrink-0 text-[#cfd1d4] text-[16px] mt-[2px]">{`Delta : `}</p>
                                        <p className={`relative shrink-0 text-[24px] ${scoreDelta >= 0 ? 'text-[#00c2b8]' : 'text-[#EF4444]'}`}>
                                          {scoreDelta > 0 ? '+' : ''}{scoreDelta}
                                        </p>
                                      </div>
                                    </div>

                                    {/* Competitor Score Circle */}
                                    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0">
                                      <div className="relative shrink-0 size-[150px]">
                                        <div className="absolute left-1/2 size-[114px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                                          <div className="absolute inset-[-49.12%_-52.63%_-56.14%_-52.63%]">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 234 234">
                                              <g filter={`url(#filter0_dd_comp_${index})`}>
                                                <circle cx="117" cy="113" fill="#16243E" fillOpacity="0.6" r="57" shapeRendering="crispEdges" />
                                                <circle cx="117" cy="113" r="56.5" shapeRendering="crispEdges" stroke="#FCFCFC" strokeOpacity="0.06" />
                                              </g>
                                              <defs>
                                                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="234" id={`filter0_dd_comp_${index}`} width="234" x="0" y="0">
                                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                  <feOffset dy="4" />
                                                  <feGaussianBlur stdDeviation="30" />
                                                  <feComposite in2="hardAlpha" operator="out" />
                                                  <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.945098 0 0 0 0 0.956863 0 0 0 0.15 0" />
                                                  <feBlend in2="BackgroundImageFix" mode="normal" result={`effect1_dropShadow_comp_${index}`} />
                                                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                  <feOffset dy="10" />
                                                  <feGaussianBlur stdDeviation="12.5" />
                                                  <feComposite in2="hardAlpha" operator="out" />
                                                  <feColorMatrix type="matrix" values="0 0 0 0 0.0149001 0 0 0 0 0.0421976 0 0 0 0 0.0907264 0 0 0 0.4 0" />
                                                  <feBlend in2={`effect1_dropShadow_comp_${index}`} mode="normal" result={`effect2_dropShadow_comp_${index}`} />
                                                  <feBlend in="SourceGraphic" in2={`effect2_dropShadow_comp_${index}`} mode="normal" result="shape" />
                                                </filter>
                                              </defs>
                                            </svg>
                                          </div>
                                        </div>
                                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
                                          <g>
                                            <g>
                                              <mask fill="white" id={`path-1-inside-1-comp-${index}`}>
                                                <path d={svgPaths.p3e18f000} />
                                              </mask>
                                              <path d={svgPaths.p3e18f000} fill="#16243E" fillOpacity="0.9" mask={`url(#path-1-inside-1-comp-${index})`} stroke="#C6F558" strokeOpacity="0.2" />
                                            </g>
                                            <g>
                                              <path d={svgPaths.pf8e7100} fill={`url(#paint0_linear_comp_${index})`} />
                                              <path d={svgPaths.p19c489c0} stroke="#C6F558" strokeOpacity="0.2" strokeWidth="0.5" />
                                            </g>
                                          </g>
                                          <defs>
                                            <linearGradient gradientUnits="userSpaceOnUse" id={`paint0_linear_comp_${index}`} x1="75" x2="75" y1="0" y2="150">
                                              <stop stopColor="#EF4444" />
                                              <stop offset="1" stopColor="#8F1515" />
                                            </linearGradient>
                                          </defs>
                                        </svg>
                                        <div className="absolute content-stretch flex flex-col gap-[6px] items-center justify-center left-[calc(50%-0.5px)] text-nowrap top-[calc(50%+5.5px)] translate-x-[-50%] translate-y-[-50%] whitespace-pre">
                                          <p className="font-satoshi font-bold leading-[normal] not-italic relative shrink-0 text-[#fef0cc] text-[48px] tracking-[-0.96px]">{competitor.score}</p>
                                          <p className=" font-normal leading-[26px] relative shrink-0 text-[#cfd1d4] text-[14px] tracking-[0.07px]">Overall</p>
                                        </div>
                                      </div>
                                      <p className=" font-normal leading-[normal] relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Competitor score</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Divider */}
                              <div className="h-0 relative shrink-0 w-full">
                                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 871 1">
                                    <path d="M0 0.5H871" stroke="white" strokeOpacity="0.1" />
                                  </svg>
                                </div>
                              </div>

                              {/* OMG Comparison Cards */}
                              <div className="relative shrink-0 w-full">
                                <div className="flex flex-row items-start size-full gap-[60px]">
                                  {/* YOUR BRAND Card */}
                                  <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 flex-1">
                                    <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
                                    
                                    <div className="bg-gradient-to-r from-[rgba(19,46,61,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(10,58,85,0.5)] w-full">
                                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
                                      <div className="flex flex-row items-center size-full">
                                        <div className="content-stretch flex h-[48px] items-center justify-between px-[20px] py-[16px] relative w-full">
                                          <p className="font-semibold leading-[normal] relative shrink-0 text-[#00c2b8] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre text-center w-full">Your brand</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="bg-[rgba(22,36,62,0.5)] content-stretch flex flex-col items-end justify-center px-[16px] py-[20px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
                                      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                                        <OMGScoreSection 
                                          label="OPTIMIZE" 
                                          icon={
                                            <div className="relative shrink-0 size-[16px]">
                                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                <g clipPath="url(#clip0_opt)">
                                                  <path d={svgPaths.p19aa0680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p2b561900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p35abdf80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p3fe85180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d="M1.33333 10.6667H1.34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p32d5a6be} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p5096bc0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p2a7a680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p12c93300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_opt">
                                                    <rect fill="white" height="16" width="16" />
                                                  </clipPath>
                                                </defs>
                                              </svg>
                                            </div>
                                          } 
                                          score={displayUserScores.opt} 
                                          barColor="#00c2b8" 
                                          details={[
                                            { label: 'CWV Score', value: apiUserDetail?.cwv },
                                            { label: 'Schema Score', value: apiUserDetail?.schema },
                                          ]}
                                        />

                                        <div className="h-0 relative shrink-0 w-full">
                                          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                                              <path d="M0 0.5H237" stroke="white" strokeOpacity="0.1" />
                                            </svg>
                                          </div>
                                        </div>

                                        <OMGScoreSection 
                                          label="MANIFEST" 
                                          icon={
                                            <div className="relative shrink-0 size-[16px]">
                                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                <g>
                                                  <path d={svgPaths.p1bb15080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                </g>
                                              </svg>
                                            </div>
                                          } 
                                          score={displayUserScores.man} 
                                          barColor="#cfff04" 
                                          details={[
                                            { label: 'Backlink Score', value: apiUserDetail?.backlink },
                                            { label: 'News Mention Score', value: apiUserDetail?.newsMention },
                                            { label: 'Wikidata Score', value: apiUserDetail?.wikidata },
                                          ]}
                                        />

                                        <div className="h-0 relative shrink-0 w-full">
                                          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                                              <path d="M0 0.5H237" stroke="white" strokeOpacity="0.1" />
                                            </svg>
                                          </div>
                                        </div>

                                        <OMGScoreSection 
                                          label="GENERATIVE" 
                                          icon={
                                            <div className="relative shrink-0 size-[16px]">
                                              <Image 
                                                src="/icons/checkmark-white.svg"
                                                alt="AI Icon"
                                                width={16}
                                                height={16}
                                                className="block size-full"
                                              />
                                            </div>
                                          } 
                                          score={displayUserScores.gen} 
                                          barColor="#ff9f0a" 
                                          details={[
                                            { label: 'AI Cite Score', value: apiUserDetail?.aiCite },
                                            { label: 'AI Overview Appearance', value: apiUserDetail?.aiOverview },
                                            { label: 'AI Cite Ranking Score', value: apiUserDetail?.aiCiteRanking },
                                          ]}
                                        />
                                      </div>
                                    </div>
                                  </div>

                                  {/* Center Text */}
                                  <div className="flex items-center justify-center mt-[28%]">
                                    <p className="font-sansation leading-[normal] not-italic relative shrink-0 text-[20px] text-center text-nowrap text-white whitespace-pre">
                                      {`OMG `}
                                      <br aria-hidden="true" />
                                      Comparison
                                    </p>
                                  </div>

                                  {/* COMPETITOR Card */}
                                  <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 flex-1">
                                    <div aria-hidden="true" className="absolute border border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_16px_0px_rgba(112,112,112,0.15)]" />
                                    
                                    <div className="bg-gradient-to-r from-[rgba(61,19,19,0.5)] h-[48px] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 to-[rgba(176,0,0,0.5)] w-full">
                                      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
                                      <div className="flex flex-row items-center justify-center size-full">
                                        <div className="content-stretch flex h-[48px] items-center justify-center px-[20px] py-[16px] relative w-full">
                                          <p className=" font-semibold leading-[normal] relative shrink-0 text-[#e3170a] text-[14px] text-nowrap tracking-[0.6px] uppercase whitespace-pre">competitor</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="bg-[rgba(22,36,62,0.5)] content-stretch flex flex-col items-end justify-center px-[16px] py-[20px] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
                                      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                                        <OMGScoreSection 
                                          label="OPTIMIZE" 
                                          icon={
                                            <div className="relative shrink-0 size-[16px]">
                                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                <g clipPath="url(#clip0_opt_comp)">
                                                  <path d={svgPaths.p19aa0680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p2b561900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p35abdf80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p3fe85180} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d="M1.33333 10.6667H1.34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p32d5a6be} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p5096bc0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p2a7a680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={svgPaths.p12c93300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_opt_comp">
                                                    <rect fill="white" height="16" width="16" />
                                                  </clipPath>
                                                </defs>
                                              </svg>
                                            </div>
                                          } 
                                          score={competitor.opt} 
                                          barColor="#00c2b8" 
                                          details={[
                                            { label: 'CWV Score', value: competitor.cwvScore },
                                            { label: 'Schema Score', value: competitor.schemaScore },
                                          ]}
                                        />

                                        <div className="h-0 relative shrink-0 w-full">
                                          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                                              <path d="M0 0.5H237" stroke="white" strokeOpacity="0.1" />
                                            </svg>
                                          </div>
                                        </div>

                                        <OMGScoreSection 
                                          label="MANIFEST" 
                                          icon={
                                            <div className="relative shrink-0 size-[16px]">
                                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                <g>
                                                  <path d={svgPaths.p1bb15080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                </g>
                                              </svg>
                                            </div>
                                          } 
                                          score={competitor.man} 
                                          barColor="#cfff04" 
                                          details={[
                                            { label: 'Backlink Score', value: competitor.backlinkScore },
                                            { label: 'News Mention Score', value: competitor.newsMentionScore },
                                            { label: 'Wikidata Score', value: competitor.wikidataScore },
                                          ]}
                                        />

                                        <div className="h-0 relative shrink-0 w-full">
                                          <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                                              <path d="M0 0.5H237" stroke="white" strokeOpacity="0.1" />
                                            </svg>
                                          </div>
                                        </div>

                                        <OMGScoreSection 
                                          label="GENERATIVE" 
                                          icon={
                                            <div className="relative shrink-0 size-[16px]">
                                              <Image 
                                                src="/icons/checkmark-white.svg"
                                                alt="AI Icon"
                                                width={16}
                                                height={16}
                                                className="block size-full"
                                              />
                                            </div>
                                          } 
                                          score={competitor.gen} 
                                          barColor="#ff9f0a" 
                                          details={[
                                            { label: 'AI Cite Score', value: competitor.aiCiteScore },
                                            { label: 'AI Overview Appearance', value: competitor.aiOverviewScore },
                                            { label: 'AI Cite Ranking Score', value: competitor.aiCiteRankingScore },
                                          ]}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Divider */}
                              {/* <div className="h-0 relative shrink-0 w-full">
                                <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 871 1">
                                    <path d="M0 0.5H871" stroke="white" strokeOpacity="0.1" />
                                  </svg>
                                </div>
                              </div> */}

                              {/* Charts Placeholder */}
                              {/* <div className="content-stretch flex items-start justify-between relative shrink-0 w-full gap-[24px]">
                                <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[rgba(22,36,62,0.3)] rounded-[12px]">
                                  <p className="text-[#939393] text-center mb-2">Radar Chart</p>
                                  <p className="text-[#6a6a6b] text-[12px] text-center">Visual comparison across all metrics</p>
                                </div>
                                <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[rgba(22,36,62,0.3)] rounded-[12px]">
                                  <p className="text-[#939393] text-center mb-2">Line Chart</p>
                                  <p className="text-[#6a6a6b] text-[12px] text-center">Trend analysis over time</p>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty State */}
      {competitors.length === 0 && (
        <div className="bg-[rgba(22,36,62,0.5)] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(240,241,244,0.05)] border-solid inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center px-[32px] py-[64px] relative w-full gap-[16px]">
              <div className="relative shrink-0 size-[48px]">
                <Image src="icons/growth.svg" alt="Manifest Icon" width={48} height={48} />
              </div>
              <p className=" font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(140,140,140,0.4)] text-center max-w-[629px]">
                {isComparisonsLoading
                  ? 'Loading comparisons...'
                  : (comparisonsError ? 'Error loading comparisons' : 'Add competitor above to view deep-dive analysis comparison')}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
