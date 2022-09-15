      return res.status(statusCode.BAD_REQUEST).json({
        status: 'error',
        code: 400,
        message: 'bad request, is missing the query filter param',
      });
