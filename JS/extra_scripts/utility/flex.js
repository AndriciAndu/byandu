
	(function(){

		var demoItemsArray = [ 
            'flex-direction' , 'flex-wrap' , 
            'flex-main' , 'flex-cross'   , 'flex-extra'   , 'additional'  ,
            'flex-self'
        ];

		// Code Blocks
		// --------------------------------

			var codeBlocks_css = [

				// 
				    {
				    name : null ,
				    code :
				    `    /* Utility - Flex */
				    /* -------------------------------------------- */

				        /* General */
				        /* -------------------------------------------- */

				                /* All viewports */
				                    .flex {
				                        display: -webkit-box;   display: -moz-box; 
				                        display: -ms-flexbox;   display: -webkit-flex;  
				                        display: flex;
				                    }

				                /* xs-only */
				                @media (max-width: 575.98px) {
				                    .xs-o-flex {
				                        display: -webkit-box;   display: -moz-box; 
				                        display: -ms-flexbox;   display: -webkit-flex;  
				                        display: flex;
				                    }
				                }

				                /* sm */
				                @media (min-width: 575.98px) {
				                    .sm-flex {
				                        display: -webkit-box;   display: -moz-box; 
				                        display: -ms-flexbox;   display: -webkit-flex;  
				                        display: flex;
				                    }
				                }

				                /* sm-only */
				                @media (min-width: 575.98px) and (max-width: 767.98px) {
				                    .sm-o-flex {
				                        display: -webkit-box;   display: -moz-box; 
				                        display: -ms-flexbox;   display: -webkit-flex;  
				                        display: flex;
				                    }
				                }

				                /* md */
				                @media (min-width: 767.98px) {
				                    .md-flex {
				                        display: -webkit-box;   display: -moz-box; 
				                        display: -ms-flexbox;   display: -webkit-flex;  
				                        display: flex;
				                    }
				                }

				                /* md-only */
				                @media (min-width: 767.98px) and (max-width: 991.98px) {
				                    .md-o-flex {
				                        display: -webkit-box;   display: -moz-box; 
				                        display: -ms-flexbox;   display: -webkit-flex;  
				                        display: flex;
				                    }
				                }

				                /* lg */
				                @media (min-width: 991.98px) {
				                    .lg-flex {
				                        display: -webkit-box;   display: -moz-box; 
				                        display: -ms-flexbox;   display: -webkit-flex;  
				                        display: flex;
				                    }
				                }

				                /* lg-only */
				                @media (min-width: 991.98px) and (max-width: 1199.98px) {
				                    .lg-o-flex {
				                        display: -webkit-box;   display: -moz-box; 
				                        display: -ms-flexbox;   display: -webkit-flex;  
				                        display: flex;
				                    }
				                }

				                /* xl  */
				                @media (min-width: 1199.98px) {
				                    .xl-flex {
				                        display: -webkit-box;   display: -moz-box; 
				                        display: -ms-flexbox;   display: -webkit-flex;  
				                        display: flex;
				                    }
				                }

				        /* Parent */
				        /* -------------------------------------------- */
				    `
				    },

				// flex-direction
					{
					name : 'flex-direction' ,
					code :
					`            /* Flex-Direction */
				            /* -------------------------------------------- */

				                /* Sets the main axis and it's direction - how the child-elements (items) will flow */

				                /* row            -  left   > right    */
				                /* row-reverse    -  right  > left     */
				                /* column         -  top    > bottom   */
				                /* column-reverse -  bottom > left     */

				                /* All viewports */
				                    .flex-row            { flex-direction: row;                 }
				                    .flex-col            { flex-direction: column;              }
				                    .flex-row-rev        { flex-direction: row-reverse;         }
				                    .flex-col-rev        { flex-direction: column-reverse;      }

				                /* xs-only */
				                @media (max-width: 575.98px) {
				                    .xs-o-flex-row       { flex-direction: row;                 }
				                    .xs-o-flex-col       { flex-direction: column;              }
				                    .xs-o-flex-row-rev   { flex-direction: row-reverse;         }
				                    .xs-o-flex-col-rev   { flex-direction: column-reverse;      }
				                }

				                /* sm */
				                @media (min-width: 575.98px) {
				                    .sm-flex-row         { flex-direction: row;                 }
				                    .sm-flex-col         { flex-direction: column;              }
				                    .sm-flex-row-rev     { flex-direction: row-reverse;         }
				                    .sm-flex-col-rev     { flex-direction: column-reverse;      }
				                }

				                /* sm-only */
				                @media (min-width: 575.98px) and (max-width: 767.98px) {
				                    .sm-o-flex-row       { flex-direction: row;                 }
				                    .sm-o-flex-col       { flex-direction: column;              }
				                    .sm-o-flex-row-rev   { flex-direction: row-reverse;         }
				                    .sm-o-flex-col-rev   { flex-direction: column-reverse;      }
				                }

				                /* md */
				                @media (min-width: 767.98px) {
				                    .md-flex-row         { flex-direction: row;                 }
				                    .md-flex-col         { flex-direction: column;              }
				                    .md-flex-row-rev     { flex-direction: row-reverse;         }
				                    .md-flex-col-rev     { flex-direction: column-reverse;      }
				                }

				                /* md-only */
				                @media (min-width: 767.98px) and (max-width: 991.98px) {
				                    .md-o-flex-row       { flex-direction: row;                 }
				                    .md-o-flex-col       { flex-direction: column;              }
				                    .md-o-flex-row-rev   { flex-direction: row-reverse;         }
				                    .md-o-flex-col-rev   { flex-direction: column-reverse;      }
				                }

				                /* lg */
				                @media (min-width: 991.98px) {
				                    .lg-flex-row         { flex-direction: row;                 }
				                    .lg-flex-col         { flex-direction: column;              }
				                    .lg-flex-row-rev     { flex-direction: row-reverse;         }
				                    .lg-flex-col-rev     { flex-direction: column-reverse;      }
				                }

				                /* lg-only */
				                @media (min-width: 991.98px) and (max-width: 1199.98px) {
				                    .lg-o-flex-row       { flex-direction: row;                 }
				                    .lg-o-flex-col       { flex-direction: column;              }
				                    .lg-o-flex-row-rev   { flex-direction: row-reverse;         }
				                    .lg-o-flex-col-rev   { flex-direction: column-reverse;      }
				                }

				                /* xl  */
				                @media (min-width: 1199.98px) {
				                    .xl-flex-row         { flex-direction: row;                 }
				                    .xl-flex-col         { flex-direction: column;              }
				                    .xl-flex-row-rev     { flex-direction: row-reverse;         }
				                    .xl-flex-col-rev     { flex-direction: column-reverse;      }
				                }

				    `
					},

				// flex-wrap
					{
					name : 'flex-wrap' ,
					code :
					`            /* Flex-Wrap */
				            /* -------------------------------------------- */

				                /* Sets if the child-elements (items) will wrap to multiple lines */

				                /* nowrap         - [default] - one line */
				                /* wrap           - wrap on multiple line top-to-bottom */
				                /* wrap-reverse   - wrap on multiple line bottom-to-top */

				                /* All viewports */
				                    .flex-wrap           { flex-wrap: wrap;         }
				                    .flex-nowrap         { flex-wrap: nowrap;       }
				                    .flex-wrap-rev       { flex-wrap: wrap-reverse; }

				                /* xs-only */
				                @media (max-width: 575.98px) {
				                    .xs-o-flex-wrap      { flex-wrap: wrap;         }
				                    .xs-o-flex-nowrap    { flex-wrap: nowrap;       }
				                    .xs-o-flex-wrap-rev  { flex-wrap: wrap-reverse; }
				                }

				                /* sm */
				                @media (min-width: 575.98px) {
				                    .sm-flex-wrap        { flex-wrap: wrap;         }
				                    .sm-flex-nowrap      { flex-wrap: nowrap;       }
				                    .sm-flex-wrap-rev    { flex-wrap: wrap-reverse; }
				                }

				                /* sm-only */
				                @media (min-width: 575.98px) and (max-width: 767.98px) {
				                    .sm-o-flex-wrap      { flex-wrap: wrap;         }
				                    .sm-o-flex-nowrap    { flex-wrap: nowrap;       }
				                    .sm-o-flex-wrap-rev  { flex-wrap: wrap-reverse; }
				                }

				                /* md */
				                @media (min-width: 767.98px) {
				                    .md-flex-wrap        { flex-wrap: wrap;         }
				                    .md-flex-nowrap      { flex-wrap: nowrap;       }
				                    .md-flex-wrap-rev    { flex-wrap: wrap-reverse; }
				                }

				                /* md-only */
				                @media (min-width: 767.98px) and (max-width: 991.98px) {
				                    .md-o-flex-wrap      { flex-wrap: wrap;         }
				                    .md-o-flex-nowrap    { flex-wrap: nowrap;       }
				                    .md-o-flex-wrap-rev  { flex-wrap: wrap-reverse; }
				                }

				                /* lg */
				                @media (min-width: 991.98px) {
				                    .lg-flex-wrap        { flex-wrap: wrap;         }
				                    .lg-flex-nowrap      { flex-wrap: nowrap;       }
				                    .lg-flex-wrap-rev    { flex-wrap: wrap-reverse; }
				                }

				                /* lg-only */
				                @media (min-width: 991.98px) and (max-width: 1199.98px) {
				                    .lg-o-flex-wrap      { flex-wrap: wrap;         }
				                    .lg-o-flex-nowrap    { flex-wrap: nowrap;       }
				                    .lg-o-flex-wrap-rev  { flex-wrap: wrap-reverse; }
				                }

				                /* xl  */
				                @media (min-width: 1199.98px) {
				                    .xl-flex-wrap        { flex-wrap: wrap;         }
				                    .xl-flex-nowrap      { flex-wrap: nowrap;       }
				                    .xl-flex-wrap-rev    { flex-wrap: wrap-reverse; }
				                }
				    `
					},

				// flex-main
					{
					name : 'flex-main' ,
					code :
					`            /* flex-main | Justify-Content */
				            /* -------------------------------------------- */

				                /* Sets the alignment along the main-axis */
				                /* Also distributes [remaining space] when child-elements (items) are [inflexible], or [at maximum size]. */

				                /* All viewports */
				                    .flex-main-start         { justify-content: flex-start;         }
				                    .flex-main-end           { justify-content: flex-end;           }
				                    .flex-main-center        { justify-content: flex-center;        }
				                    .flex-main-between       { justify-content: flex-space-between; }
				                    .flex-main-around        { justify-content: flex-space-around;  }
				                    .flex-main-evenly        { justify-content: flex-space-evenly;  }

				                /* xs-only */
				                @media (max-width: 575.98px) {
				                    .xs-o-flex-main-start    { justify-content: flex-start;         }
				                    .xs-o-flex-main-end      { justify-content: flex-end;           }
				                    .xs-o-flex-main-center   { justify-content: flex-center;        }
				                    .xs-o-flex-main-between  { justify-content: flex-space-between; }
				                    .xs-o-flex-main-around   { justify-content: flex-space-around;  }
				                    .xs-o-flex-main-evenly   { justify-content: flex-space-evenly;  }
				                }

				                /* sm */
				                @media (min-width: 575.98px) {
				                    .sm-flex-main-start      { justify-content: flex-start;         }
				                    .sm-flex-main-end        { justify-content: flex-end;           }
				                    .sm-flex-main-center     { justify-content: flex-center;        }
				                    .sm-flex-main-between    { justify-content: flex-space-between; }
				                    .sm-flex-main-around     { justify-content: flex-space-around;  }
				                    .sm-flex-main-evenly     { justify-content: flex-space-evenly;  }
				                }

				                /* sm-only */
				                @media (min-width: 575.98px) and (max-width: 767.98px) {
				                    .sm-o-flex-main-start    { justify-content: flex-start;         }
				                    .sm-o-flex-main-end      { justify-content: flex-end;           }
				                    .sm-o-flex-main-center   { justify-content: flex-center;        }
				                    .sm-o-flex-main-between  { justify-content: flex-space-between; }
				                    .sm-o-flex-main-around   { justify-content: flex-space-around;  }
				                    .sm-o-flex-main-evenly   { justify-content: flex-space-evenly;  }
				                }

				                /* md */
				                @media (min-width: 767.98px) {
				                    .md-flex-main-start      { justify-content: flex-start;         }
				                    .md-flex-main-end        { justify-content: flex-end;           }
				                    .md-flex-main-center     { justify-content: flex-center;        }
				                    .md-flex-main-between    { justify-content: flex-space-between; }
				                    .md-flex-main-around     { justify-content: flex-space-around;  }
				                    .md-flex-main-evenly     { justify-content: flex-space-evenly;  }
				                }

				                /* md-only */
				                @media (min-width: 767.98px) and (max-width: 991.98px) {
				                    .md-o-flex-main-start    { justify-content: flex-start;         }
				                    .md-o-flex-main-end      { justify-content: flex-end;           }
				                    .md-o-flex-main-center   { justify-content: flex-center;        }
				                    .md-o-flex-main-between  { justify-content: flex-space-between; }
				                    .md-o-flex-main-around   { justify-content: flex-space-around;  }
				                    .md-o-flex-main-evenly   { justify-content: flex-space-evenly;  }
				                }

				                /* lg */
				                @media (min-width: 991.98px) {
				                    .lg-flex-main-start      { justify-content: flex-start;         }
				                    .lg-flex-main-end        { justify-content: flex-end;           }
				                    .lg-flex-main-center     { justify-content: flex-center;        }
				                    .lg-flex-main-between    { justify-content: flex-space-between; }
				                    .lg-flex-main-around     { justify-content: flex-space-around;  }
				                    .lg-flex-main-evenly     { justify-content: flex-space-evenly;  }
				                }

				                /* lg-only */
				                @media (min-width: 991.98px) and (max-width: 1199.98px) {
				                    .lg-o-flex-main-start    { justify-content: flex-start;         }
				                    .lg-o-flex-main-end      { justify-content: flex-end;           }
				                    .lg-o-flex-main-center   { justify-content: flex-center;        }
				                    .lg-o-flex-main-between  { justify-content: flex-space-between; }
				                    .lg-o-flex-main-around   { justify-content: flex-space-around;  }
				                    .lg-o-flex-main-evenly   { justify-content: flex-space-evenly;  }
				                }

				                /* xl  */
				                @media (min-width: 1199.98px) {
				                    .xl-flex-main-start      { justify-content: flex-start;         }
				                    .xl-flex-main-end        { justify-content: flex-end;           }
				                    .xl-flex-main-center     { justify-content: flex-center;        }
				                    .xl-flex-main-between    { justify-content: flex-space-between; }
				                    .xl-flex-main-around     { justify-content: flex-space-around;  }
				                    .xl-flex-main-evenly     { justify-content: flex-space-evenly;  }
				                }
				    `
					},

				// flex-cross
				    {
				    name : 'flex-cross' ,
				    code :
				    `            /* flex-cross | Align-Items */
				            /* -------------------------------------------- */

				                /* Sets the alignment along the cross-axis - perpendicular to the main-axis */

				                /* All viewports */
				                    .flex-cross-start         { align-items: flex-start; }
				                    .flex-cross-end           { align-items: flex-end;   }
				                    .flex-cross-center        { align-items: center;     }
				                    .flex-cross-stretch       { align-items: stretch;    }
				                    .flex-cross-baseline      { align-items: baseline;   }

				                /* xs-only */
				                @media (max-width: 575.98px) {
				                    .xs-o-flex-cross-start    { align-items: flex-start; }
				                    .xs-o-flex-cross-end      { align-items: flex-end;   }
				                    .xs-o-flex-cross-center   { align-items: center;     }
				                    .xs-o-flex-cross-stretch  { align-items: stretch;    }
				                    .xs-o-flex-cross-baseline { align-items: baseline;   }
				                }

				                /* sm */
				                @media (min-width: 575.98px) {
				                    .sm-flex-cross-start      { align-items: flex-start; }
				                    .sm-flex-cross-end        { align-items: flex-end;   }
				                    .sm-flex-cross-center     { align-items: center;     }
				                    .sm-flex-cross-stretch    { align-items: stretch;    }
				                    .sm-flex-cross-baseline   { align-items: baseline;   }
				                }

				                /* sm-only */
				                @media (min-width: 575.98px) and (max-width: 767.98px) {
				                    .sm-o-flex-cross-start    { align-items: flex-start; }
				                    .sm-o-flex-cross-end      { align-items: flex-end;   }
				                    .sm-o-flex-cross-center   { align-items: center;     }
				                    .sm-o-flex-cross-stretch  { align-items: stretch;    }
				                    .sm-o-flex-cross-baseline { align-items: baseline;   }
				                }

				                /* md */
				                @media (min-width: 767.98px) {
				                    .md-flex-cross-start      { align-items: flex-start; }
				                    .md-flex-cross-end        { align-items: flex-end;   }
				                    .md-flex-cross-center     { align-items: center;     }
				                    .md-flex-cross-stretch    { align-items: stretch;    }
				                    .md-flex-cross-baseline   { align-items: baseline;   }
				                }

				                /* md-only */
				                @media (min-width: 767.98px) and (max-width: 991.98px) {
				                    .md-o-flex-cross-start    { align-items: flex-start; }
				                    .md-o-flex-cross-end      { align-items: flex-end;   }
				                    .md-o-flex-cross-center   { align-items: center;     }
				                    .md-o-flex-cross-stretch  { align-items: stretch;    }
				                    .md-o-flex-cross-baseline { align-items: baseline;   }
				                }

				                /* lg */
				                @media (min-width: 991.98px) {
				                    .lg-flex-cross-start      { align-items: flex-start; }
				                    .lg-flex-cross-end        { align-items: flex-end;   }
				                    .lg-flex-cross-center     { align-items: center;     }
				                    .lg-flex-cross-stretch    { align-items: stretch;    }
				                    .lg-flex-cross-baseline   { align-items: baseline;   }
				                }

				                /* lg-only */
				                @media (min-width: 991.98px) and (max-width: 1199.98px) {
				                    .lg-o-flex-cross-start    { align-items: flex-start; }
				                    .lg-o-flex-cross-end      { align-items: flex-end;   }
				                    .lg-o-flex-cross-center   { align-items: center;     }
				                    .lg-o-flex-cross-stretch  { align-items: stretch;    }
				                    .lg-o-flex-cross-baseline { align-items: baseline;   }
				                }

				                /* xl  */
				                @media (min-width: 1199.98px) {
				                    .xl-flex-cross-start      { align-items: flex-start; }
				                    .xl-flex-cross-end        { align-items: flex-end;   }
				                    .xl-flex-cross-center     { align-items: center;     }
				                    .xl-flex-cross-stretch    { align-items: stretch;    }
				                    .xl-flex-cross-baseline   { align-items: baseline;   }
				                }
				    `
				    },

				// flex-extra
				    {
				    name : 'flex-extra' ,
				    code :
				    `            /* flex-extra | Align-Content */
				            /* -------------------------------------------- */

				                /* aligns multiple-line child-elements (items) when there is extra space in the cross-axis */
				                /* similar to how [justify-content] aligns individual items within the main-axis.  */

				                /* All viewports */
				                    .flex-extra-start         { align-content: flex-start;           }
				                    .flex-extra-end           { align-content: flex-end;             }
				                    .flex-extra-center        { align-content: flex-center;          }
				                    .flex-extra-between       { align-content: flex-space-between;   }
				                    .flex-extra-around        { align-content: flex-space-around;    }
				                    .flex-extra-stretch       { align-content: stretch;              }

				                /* xs-only */
				                @media (max-width: 575.98px) {
				                    .xs-o-flex-extra-start    { align-content: flex-start;           }
				                    .xs-o-flex-extra-end      { align-content: flex-end;             }
				                    .xs-o-flex-extra-center   { align-content: flex-center;          }
				                    .xs-o-flex-extra-between  { align-content: flex-space-between;   }
				                    .xs-o-flex-extra-around   { align-content: flex-space-around;    }
				                    .xs-o-flex-extra-stretch  { align-content: stretch;              }
				                }

				                /* sm */
				                @media (min-width: 575.98px) {
				                    .sm-flex-extra-start      { align-content: flex-start;           }
				                    .sm-flex-extra-end        { align-content: flex-end;             }
				                    .sm-flex-extra-center     { align-content: flex-center;          }
				                    .sm-flex-extra-between    { align-content: flex-space-between;   }
				                    .sm-flex-extra-around     { align-content: flex-space-around;    }
				                    .sm-flex-extra-stretch    { align-content: stretch;              }
				                }

				                /* sm-only */
				                @media (min-width: 575.98px) and (max-width: 767.98px) {
				                    .sm-o-flex-extra-start    { align-content: flex-start;           }
				                    .sm-o-flex-extra-end      { align-content: flex-end;             }
				                    .sm-o-flex-extra-center   { align-content: flex-center;          }
				                    .sm-o-flex-extra-between  { align-content: flex-space-between;   }
				                    .sm-o-flex-extra-around   { align-content: flex-space-around;    }
				                    .sm-o-flex-extra-stretch  { align-content: stretch;              }
				                }

				                /* md */
				                @media (min-width: 767.98px) {
				                    .md-flex-extra-start      { align-content: flex-start;           }
				                    .md-flex-extra-end        { align-content: flex-end;             }
				                    .md-flex-extra-center     { align-content: flex-center;          }
				                    .md-flex-extra-between    { align-content: flex-space-between;   }
				                    .md-flex-extra-around     { align-content: flex-space-around;    }
				                    .md-flex-extra-stretch    { align-content: stretch;              }
				                }

				                /* md-only */
				                @media (min-width: 767.98px) and (max-width: 991.98px) {
				                    .md-o-flex-extra-start    { align-content: flex-start;           }
				                    .md-o-flex-extra-end      { align-content: flex-end;             }
				                    .md-o-flex-extra-center   { align-content: flex-center;          }
				                    .md-o-flex-extra-between  { align-content: flex-space-between;   }
				                    .md-o-flex-extra-around   { align-content: flex-space-around;    }
				                    .md-o-flex-extra-stretch  { align-content: stretch;              }
				                }

				                /* lg */
				                @media (min-width: 991.98px) {
				                    .lg-flex-extra-start      { align-content: flex-start;           }
				                    .lg-flex-extra-end        { align-content: flex-end;             }
				                    .lg-flex-extra-center     { align-content: flex-center;          }
				                    .lg-flex-extra-between    { align-content: flex-space-between;   }
				                    .lg-flex-extra-around     { align-content: flex-space-around;    }
				                    .lg-flex-extra-stretch    { align-content: stretch;              }
				                }

				                /* lg-only */
				                @media (min-width: 991.98px) and (max-width: 1199.98px) {
				                    .lg-o-flex-extra-start    { align-content: flex-start;           }
				                    .lg-o-flex-extra-end      { align-content: flex-end;             }
				                    .lg-o-flex-extra-center   { align-content: flex-center;          }
				                    .lg-o-flex-extra-between  { align-content: flex-space-between;   }
				                    .lg-o-flex-extra-around   { align-content: flex-space-around;    }
				                    .lg-o-flex-extra-stretch  { align-content: stretch;              }
				                }

				                /* xl  */
				                @media (min-width: 1199.98px) {
				                    .xl-flex-extra-start      { align-content: flex-start;           }
				                    .xl-flex-extra-end        { align-content: flex-end;             }
				                    .xl-flex-extra-center     { align-content: flex-center;          }
				                    .xl-flex-extra-between    { align-content: flex-space-between;   }
				                    .xl-flex-extra-around     { align-content: flex-space-around;    }
				                    .xl-flex-extra-stretch    { align-content: stretch;              }
				                }
				    `
				    },

				// additional
				    {
				    name : 'additional' ,
				    code :
				    `            /* Additional Classes */
				            /* -------------------------------------------- */

				                /* Flex-Equal */
				                /* -------------------------------------------- */

				                    /* Make items ocupy equal space, along the main-axis */

				                    .flex-equal > * { flex: 1; }

				                    @media (max-width: 575.98px)                            { .xs-o-flex-equal > * { flex: 1; } }
				                    @media (min-width: 575.98px)                            { .sm-flex-equal > *   { flex: 1; } }
				                    @media (min-width: 575.98px) and (max-width: 767.98px)  { .sm-o-flex-equal > * { flex: 1; } }
				                    @media (min-width: 767.98px)                            { .md-flex-equal > *   { flex: 1; } }
				                    @media (min-width: 767.98px) and (max-width: 991.98px)  { .md-o-flex-equal > * { flex: 1; } }
				                    @media (min-width: 991.98px)                            { .lg-flex-equal > *   { flex: 1; } }
				                    @media (min-width: 991.98px) and (max-width: 1199.98px) { .lg-o-flex-equal > * { flex: 1; } }
				                    @media (min-width: 1199.98px)                           { .xl-flex-equal > *   { flex: 1; } }

				                /* Flex-Center */
				                /* -------------------------------------------- */

				                    /* align items in the center of both the [main-axis] & [cross-axis] */

				                    .flex-center { align-items: center; justify-content: center; }

				                    @media (max-width: 575.98px)                            { .xs-o-flex-center { align-items: center; justify-content: center; } }
				                    @media (min-width: 575.98px)                            { .sm-flex-center   { align-items: center; justify-content: center; } }
				                    @media (min-width: 575.98px) and (max-width: 767.98px)  { .sm-o-flex-center { align-items: center; justify-content: center; } }
				                    @media (min-width: 767.98px)                            { .md-flex-center   { align-items: center; justify-content: center; } }
				                    @media (min-width: 767.98px) and (max-width: 991.98px)  { .md-o-flex-center { align-items: center; justify-content: center; } }
				                    @media (min-width: 991.98px)                            { .lg-flex-center   { align-items: center; justify-content: center; } }
				                    @media (min-width: 991.98px) and (max-width: 1199.98px) { .lg-o-flex-center { align-items: center; justify-content: center; } }
				                    @media (min-width: 1199.98px)                           { .xl-flex-center   { align-items: center; justify-content: center; } }

				                /* Flex-Stretch-Center */
				                /* -------------------------------------------- */

				                    /* align items in the center of both the [main-axis] & [cross-axis] */

				                        .flex-stretch-center           { align-items: stretch; }
				                        .flex-stretch-center > *       { align-items: center;  }

				                        .flex-stretch-center > *       {
				                            display: -webkit-box;   display: -moz-box; 
				                            display: -ms-flexbox;   display: -webkit-flex;  
				                            display: flex;
				                        }

				                    @media (max-width: 575.98px) { 
				                        .xs-o-flex-stretch-center      { align-items: stretch; }
				                        .xs-o-flex-stretch-center > *  { align-items: center;  }

				                        .xs-o-flex-stretch-center > *  {
				                            display: -webkit-box;   display: -moz-box; 
				                            display: -ms-flexbox;   display: -webkit-flex;  
				                            display: flex;
				                        }
				                    }

				                    @media (min-width: 575.98px) { 
				                        .sm-flex-stretch-center       { align-items: stretch; }
				                        .sm-flex-stretch-center   > * { align-items: center;  }

				                        .sm-flex-stretch-center   > * {
				                            display: -webkit-box;   display: -moz-box; 
				                            display: -ms-flexbox;   display: -webkit-flex;  
				                            display: flex;
				                        }
				                    }

				                    @media (min-width: 575.98px) and (max-width: 767.98px)  { 
				                        .sm-o-flex-stretch-center     { align-items: stretch; } 
				                        .sm-o-flex-stretch-center > * { align-items: center;  }

				                        .sm-o-flex-stretch-center > * {
				                            display: -webkit-box;   display: -moz-box; 
				                            display: -ms-flexbox;   display: -webkit-flex;  
				                            display: flex;
				                        }
				                    }

				                    @media (min-width: 767.98px) { 
				                        .md-flex-stretch-center       { align-items: stretch; } 
				                        .md-flex-stretch-center   > * { align-items: center;  }

				                        .md-flex-stretch-center   > * {
				                            display: -webkit-box;   display: -moz-box; 
				                            display: -ms-flexbox;   display: -webkit-flex;  
				                            display: flex;
				                        }
				                    }

				                    @media (min-width: 767.98px) and (max-width: 991.98px)  { 
				                        .md-o-flex-stretch-center     { align-items: stretch; } 
				                        .md-o-flex-stretch-center > * { align-items: center;  }

				                        .md-o-flex-stretch-center > * {
				                            display: -webkit-box;   display: -moz-box; 
				                            display: -ms-flexbox;   display: -webkit-flex;  
				                            display: flex;
				                        }
				                    }

				                    @media (min-width: 991.98px) { 
				                        .lg-flex-stretch-center       { align-items: stretch; } 
				                        .lg-flex-stretch-center   > * { align-items: center;  }

				                        .lg-flex-stretch-center   > * {
				                            display: -webkit-box;   display: -moz-box; 
				                            display: -ms-flexbox;   display: -webkit-flex;  
				                            display: flex;
				                        }
				                    }

				                    @media (min-width: 991.98px) and (max-width: 1199.98px) { 
				                        .lg-o-flex-stretch-center     { align-items: stretch; } 
				                        .lg-o-flex-stretch-center > * { align-items: center;  }

				                        .lg-o-flex-stretch-center > * {
				                            display: -webkit-box;   display: -moz-box; 
				                            display: -ms-flexbox;   display: -webkit-flex;  
				                            display: flex;
				                        }
				                    }

				                    @media (min-width: 1199.98px) { 
				                        .xl-flex-stretch-center       { align-items: stretch; } 
				                        .xl-flex-stretch-center   > * { align-items: center;  }

				                        .xl-o-flex-stretch-center > * {
				                            display: -webkit-box;   display: -moz-box; 
				                            display: -ms-flexbox;   display: -webkit-flex;  
				                            display: flex;
				                        }
				                    }
				    `
				    },

				// flex-self
				    {
				    name : 'flex-self' ,
				    code :
				    `        /* Child */
				        /* -------------------------------------------- */

				            /* Flex-Self | align-self */
				            /* -------------------------------------------- */

				                /* Overrides the alignment set by [flex-cross | Align-Items] */

				                /* All viewports */
				                    .flex-self-start         { align-self: flex-start; }
				                    .flex-self-end           { align-self: flex-end;   }
				                    .flex-self-center        { align-self: center;     }
				                    .flex-self-stretch       { align-self: stretch;    }
				                    .flex-self-baseline      { align-self: baseline;   }

				                /* xs-only */
				                @media (max-width: 575.98px) {
				                    .xs-o-flex-self-start    { align-self: flex-start; }
				                    .xs-o-flex-self-end      { align-self: flex-end;   }
				                    .xs-o-flex-self-center   { align-self: center;     }
				                    .xs-o-flex-self-stretch  { align-self: stretch;    }
				                    .xs-o-flex-self-baseline { align-self: baseline;   }
				                }

				                /* sm */
				                @media (min-width: 575.98px) {
				                    .sm-flex-self-start      { align-self: flex-start; }
				                    .sm-flex-self-end        { align-self: flex-end;   }
				                    .sm-flex-self-center     { align-self: center;     }
				                    .sm-flex-self-stretch    { align-self: stretch;    }
				                    .sm-flex-self-baseline   { align-self: baseline;   }
				                }

				                /* sm-only */
				                @media (min-width: 575.98px) and (max-width: 767.98px) {
				                    .sm-o-flex-self-start    { align-self: flex-start; }
				                    .sm-o-flex-self-end      { align-self: flex-end;   }
				                    .sm-o-flex-self-center   { align-self: center;     }
				                    .sm-o-flex-self-stretch  { align-self: stretch;    }
				                    .sm-o-flex-self-baseline { align-self: baseline;   }
				                }

				                /* md */
				                @media (min-width: 767.98px) {
				                    .md-flex-self-start      { align-self: flex-start; }
				                    .md-flex-self-end        { align-self: flex-end;   }
				                    .md-flex-self-center     { align-self: center;     }
				                    .md-flex-self-stretch    { align-self: stretch;    }
				                    .md-flex-self-baseline   { align-self: baseline;   }
				                }

				                /* md-only */
				                @media (min-width: 767.98px) and (max-width: 991.98px) {
				                    .md-o-flex-self-start    { align-self: flex-start; }
				                    .md-o-flex-self-end      { align-self: flex-end;   }
				                    .md-o-flex-self-center   { align-self: center;     }
				                    .md-o-flex-self-stretch  { align-self: stretch;    }
				                    .md-o-flex-self-baseline { align-self: baseline;   }
				                }

				                /* lg */
				                @media (min-width: 991.98px) {
				                    .lg-flex-self-start      { align-self: flex-start; }
				                    .lg-flex-self-end        { align-self: flex-end;   }
				                    .lg-flex-self-center     { align-self: center;     }
				                    .lg-flex-self-stretch    { align-self: stretch;    }
				                    .lg-flex-self-baseline   { align-self: baseline;   }
				                }

				                /* lg-only */
				                @media (min-width: 991.98px) and (max-width: 1199.98px) {
				                    .lg-o-flex-self-start    { align-self: flex-start; }
				                    .lg-o-flex-self-end      { align-self: flex-end;   }
				                    .lg-o-flex-self-center   { align-self: center;     }
				                    .lg-o-flex-self-stretch  { align-self: stretch;    }
				                    .lg-o-flex-self-baseline { align-self: baseline;   }
				                }

				                /* xl  */
				                @media (min-width: 1199.98px) {
				                    .xl-flex-self-start      { align-self: flex-start; }
				                    .xl-flex-self-end        { align-self: flex-end;   }
				                    .xl-flex-self-center     { align-self: center;     }
				                    .xl-flex-self-stretch    { align-self: stretch;    }
				                    .xl-flex-self-baseline   { align-self: baseline;   }
				                }
				    `
				    }
			];

			codeBlocks_css = byAndu_codeBlock_formatCodeString(codeBlocks_css);

		// Param Obj
		// --------------------------------

			var paramObj = {
				checkBoxes : {
					css : demoItemsArray 
				} ,

				codeBlocks : {
					css : codeBlocks_css ,
				}
			};

			byAndu.pageConfigObj_setupObj(paramObj);
			byAndu.pageConfigObj_runConfig();

	})();

